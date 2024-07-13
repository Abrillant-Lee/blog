---
id: openharmonyos-notes
slug: /openharmonyos-notes
title: OpenHarmonyOS南向开发基础
authors: pete
keywords:
  - OpenHarmonyOS
  - rk3568
  - 开源之夏
---
# OpenHarmonyOS南向开发基础文档
> ---以rk3568为例

## 开发方向
- 北向开发

   面向应用层，提供应用程序开发所需的各种API
- 南向开发 

   面向系统层，处理与硬件内核相关的功能

## 子系统与组件
- 子系统在subsystem_config.json中定义。
- 组件在bundle.json中描述，它应该与BUILD.gn中的part_name保持一致。
- 对于3.2 beta 2及以后的版本，在产品配置文件（例如rk3568/config.json）中添加组件。

## 图形元素
- 开机引导logo位置
  ```c
  
  |- device/rk3568/kernel/logo.bmp
  
- 开机引导动画视频位置
  ```c

  |- foundation/graphic/graphic_2d/frameworks/bootanimation/data/bootvideo.mp4

## 系统特点
1. OpenHarmony的源代码与Android开放源代码项目（AOSP）有很大不同，具有更高的灵活性。

2. 多内核结构允许在不同设备上使用Linux或LiteOS的不同版本。
   - Linux内核
   - liteOS内核
       - liteOS_a  -- 微型版
       - liteOS_m  -- mini版
  
3. 为了在多架构拓展，具有子系统，子部件的多层架构
    > 一个产品(product)可以包含1~n个子系统(subsystem)，一个子系统可以包含1~n个部件(component)，一个部件可以包含1~n个模块(module)，不同产品的中的相同部件可以编译不同的特性(feature)，子系统集(domain)在源代码一级根目录有体现。

4. 可以根据硬件资源灵活挑选各个模块，从而做到系统裁剪
    > 系统较洁净，不含内置浏览器等应用组件
   
5. GN和Ninja是OpenHarmony构建体系的核心，用于工程管理和构建过程。

6. 鸿蒙系统支持多架构编译，可以编译不同架构的二进制文件。

## 系统构建
1. OpenHarmony构建体系的核心是GN和Ninja。
   - 典型传统linux下软件开发做法
       1. 源码编辑。工具:vi、sourceinsight、vscode等

       2. 编译工具链。gcc、clang等

       3. 基本工程管理。工具:make和makefile。

       4. 复杂工程管理。一般用脚本，如bash、python等。参考uboot和linux kernel工程

       5. makefile生成器。如cmake.

   
   - 鸿蒙系统的构建工具
       1. 源码编辑。用户自选，如sourceinsight，vscode都比较常用

       2. 编译工具链。鸿蒙官方提供，目前均为交叉编译工具链，clang或gcc系

       3. 基本工程管理。使用ninja，来自于google

       4. 工程管理脚本。使用python3

       5. ninja生成器。使用python+gn+ninja的形式

2. 下载gn和ninja编译环境工具linux环境命令
     ```Ubuntu
      ./build/prebuilts_download.sh
## 系统架构
- ### 子系统（subsystem）
  > foundation下包含多个子系统
  
  > 根目录下有四大子系统集（domain）
  
  1. 四大子系统集
     - “系统基本能力子系统集”   foundation
     - “基础软件服务子系统集”   base
     - “增强软件服务子系统集”   base
     - “硬件服务子系统集”       domains
      
      
     - ```C
        |- applications //应用程序
        |- arkcompiler //ark编译器
        |- base//“基础软件服务子系统集”和“硬件服务子系统集”
        |- build//编译目录
        |- build.py -> build/lite/build.py //软链接
        |- build.sh -> build/build _scripts/build.sh //软链接，标准系统编译入口
        |- commonlibrary //通用库
        |- developtools //开发工具
        |- denice//芯片相关
        |- docs//文档md文件目录
        |- domains//增强软件服务子系统集
        |- drivers//驱动文件
        |- foundation //“系统基本能力子系统集
        |- ide//ide 
        |- interface//接口
        |- kernel//内核，liteos-m，liteos-a，linux，uniproton
        |- napi_generator //native api相关
        |- prebuilts //编译工具路径
        |- productdefine //产品定义
        |- qemu-run->vendor/ohemu/common/qemu-run //qemu模拟器运行脚本
        |- test//测试用例
        |- third_party //三方库
        |- vendor //产品
     
  2. 配置文件
     - rk3568/config.json
       - 修改subsystem
  
     - build/subsystem.json
       - 定义所有子系统名称
  
  
  3. BUILD.gn 
      > （Ohos4.0之后，子系统文件夹下面不仅需要BUILD.gn，还需要bundle.json，用于对部件本身做定    义）
     - 使用ohos_executable模板情况（件官方文档）
     - 要有part_name 给subsystem的名字
  4. budle.json
     > 对子部件的描述
     - name和BUILD.gn的part_name保持一致
     - component子部件描述（可能多个）
  5. subsystem_config.json
     > 在subsystem_config.json中添加新建子系统的配置字段
  
  
  
   
- ### 部件（component）
  > 新建部件需要将vendor/hihope/rk3568/config.json添加相应部件，添加到原有部件后面
  
  - bundle.json：规定部件的详细信息。部件是子系统的进一步拆分，可复用的软件单元。每个部件的文件夹  包含源码，配置文件，资源文件，编译脚本。部件由对应源码文件夹下的bundle.json文件进行定义
      - 描述component部件属于的子系统
      - deps需要依赖的其他部件
      - 需要依赖的第三方库
      - inner_kit（内部工具包）库可以给外部其他部件使用的功能
  
  
  
  
- ### 模块（module）
  > 编译子系统的一个编译目标。
  
  - ```C
    ohos_shared_library("ace_napi"){ //ace_napi为模块名，同时也是编译目标
    deps =  [":ace_napi_static"] //模块的依赖，被依赖的对象即使没有被subsystem显式包含，也会被  编译  
    public_configs =[":ace_napi_config"]//模块配置参数，比如cf1ag
    if(!is_cross_platform_build)  {
     public_deps = ["//third_party/libuv:uv"]
    }
    subsystem_name="arkui"//模块所属部件所属子系统名称
    part_name = "napi"//模块所属部件名称，一个模块只能属于一个部件
    }
  
  - BUILD.gn中part_name规定模块属于哪个部件
- ### 特性（feature）
  > 用于体现不同产品的差异。不同特性可以编译不同编译宏或代码，从而影响define特性




## 分布式硬件
  > 分布式硬件是 OpenHarmony 提供的一个分布式能力，能将多种设备组成一个“超级终端”，使用户根据现实需要和硬件能力，选择合适的硬件提供服务，灵活运用硬件进行资源分配和按需组合，充分发挥各类硬件设备的能力，实现“一对多”的硬件资源访问，达到使用上的最佳效果。

1. FULL-SDK是系统级别的，需要从OpenHarmony源代码编译。
    > BaseSDK+SystemAPI=FULL-SDK

2. 编译后，SDK文件将在out/sdk/packages/ohos-sdk目录下生成。
    - 在//windows目录下是完整版的SDK文件，可替换DevEcoStudio中的SDK
    - 需要改写模板文件的API,在studio重新生成自动签名(在新的Eext版本下会监测Hap的rpcid文件)

3. 分布式硬件需要在module.json5的requestPermissions属性中添加相应的权限。
    - 分布式设备认证组网权限
    - 设备间的数据交换权限

## 编译

1. 使用build.sh或hb命令进行编译，后者提供了更多的灵活性和选项。
    - build命令编译
        ```c
        ./build.sh --product-name rk3568 --ccache  //（.sh换成.py也可）
    
    - hb命令编译
        ```c
          hb set   // 选择编译的ohos版本，硬件产品型号
          hb build // 开始编译
  
2. 编译结果
     > 生成刷机镜像
     - 编译完成在  //out/rk3568/目录下
     - 镜像文件在  //packages/phone/images

## 总结
   - OpenHarmony的构建和开发涉及多个层面，包括源代码管理、构建工具、系统结构、硬件兼容性和分布式硬件支持。这个笔记能帮助您快速理解OpenHarmony在RK3568平台上的构建和开发流程的关键点。开发者需要熟悉这一系列工具和流程，以便有效地为OpenHarmony平台构建和适配软件。






