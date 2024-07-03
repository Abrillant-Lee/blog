---
id: hieuler-one
slug: /hieuler-one
title: 1. 构建/烧写固件
authors: nan 
---

观看官方文档提供的[海鸥派Euler Pi 快速体验手册.pdf](https://github.com/Abrillant-Lee/Abrillant-Lee.github.io/blob/main/Summer-OSPP2024/EulerPi_Quick%20_Experience.pdf) 完成镜像烧写；可直接看`6.固件烧写`,

1. 固件来源：
- 官方网盘中给的固件
- gitee中下载固件
- 自己构建的固件,我选择使用wsl中的ubuntu构建固件(VM虚拟机太繁琐)

目前主要看gitee中的文档和网盘中的，更新及时，其他的文档省略

注意：
1. PD电源输入端供电不支持电脑USB接口或者5v供电，12v供电最佳。
   - 电脑USB接口的标准电压为5V，标准电流为500mA。
   - 否则网口无法正常工作💢😠
<img src="https://abrillant-lee.github.io/Summer-OSPP2024/海鸥派-错误连接方式.png" width="600"/>

1. 注意烧录固件大小，4G使用4G的固件

<img src="https://abrillant-lee.github.io/Summer-OSPP2024/错误固件.png" width="500"/>

烧录成功

<img src="https://abrillant-lee.github.io/Summer-OSPP2024/烧录ing.png" width="500"/>
总耗时：36min 15s
<img src="https://abrillant-lee.github.io/Summer-OSPP2024/第一次烧录成功.png" width="500"/>



