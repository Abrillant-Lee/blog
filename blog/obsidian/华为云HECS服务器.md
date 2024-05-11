---
slug: nan_HECS
title: 华为云HECS服务器开发总结
date: 2024-04-20
authors: nan
tags:
  - HECS
  - Linux
  - Shell
keywords:
  - HECS
  - Linux
  - Shell
description: 华为云HECS
image: /img/blog/Linux.png
---
## 1.新建用户
创建一个普通用户用于日常操作，只有在需要执行特定的管理员任务时，才使用root用户或者sudo命令。这样可以提高系统的安全性，同时也可以防止因为误操作导致的问题。

新建用户，并添加主目录
```bash
useradd name -m
```
添加用户密码
```bash
passwd name
```

## 2.配置免密登录

 每次使用ip连接服务器比较麻烦，容易忘记，在windows下创建配置文件`~/.ssh/config`,文件中输入一下内容，就可以通过`ssh myserver1`连接服务器
```Powershell
Host myserver1
   HostName IP地址或域名
   User 用户名
 
Host myserver2
   HostName IP地址或域名
   User 用户名
```
使用别名登陆后还需要输入密码，密码输错/忘记等等会造成一定开发时间浪费
windows下创建密钥：然后一直回车即可，执行结束后，`~/.ssh/`目录下会多两个文件： `id_rsa`：私钥   `id_rsa.pub`：公钥
```
ssh-keygen
```
 Linux中公钥中的内容，复制到myserver中的`~/.ssh/authorized_keys`文件里即可,没有的话直接创建即可。


官方中午文档：[介绍 | Nushell](https://www.nushell.sh/zh-CN/book/)

## NuShell

1. windwos安装
```
winget install nushell
scoop install nushell
```
2. 默认配置文件
nushell config file at: `C:\Users\nan\AppData\Roaming\nushell\config.nu`
3.  添加nu命令行到终端中
 [Windows Terminalopen in new window](https://github.com/microsoft/terminal)，可以通过添加如下内容到你的终端设置 `"profiles"`（JSON 文件）中来设置 `nu` 作为你的默认 Shell：
 
 ```json
 {
  "guid": "{2b372ca1-1ee2-403d-a839-6d63077ad871}",
  "hidden": false,
  "icon": "https://www.nushell.sh/icon.png",
  "name": "Nu Shell",
  "commandline": "nu.exe"
}
```

## Linux宝塔

1、获取登录的默认地址、用户名和登录密码

```bash
sudo /etc/init.d/bt default
```
2、初始化宝塔选项
```bash
sudo /etc/init.d/bt
```


## ICP备案

备案是中国大陆的一项法规，使用大陆节点服务器提供互联网信息服务的用户，需要在服务器提供商处提交备案申请。
[10分钟演示部署网站全过程。收藏备用！】](https://www.bilibili.com/video/BV1bV411Q7Vh?vd_source=83dda7469933b46fcc614109e61a8066)
[手把手教你使用Ubuntu安装Nginx并进行网站部署_ubuntu部署nginx-CSDN博客](https://blog.csdn.net/AntiO2/article/details/125805069#:~:text=%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E4%BD%BF%E7%94%A8Ubuntu%E5%AE%89%E8%A3%85Nginx%E5%B9%B6%E8%BF%9B%E8%A1%8C%E7%BD%91%E7%AB%99%E9%83%A8%E7%BD%B2%201%20Step1%20%E5%AE%89%E8%A3%85Nginx%20%E9%A6%96%E5%85%88%E4%BD%BF%E7%94%A8%20nginx%20-v%20%E6%9F%A5%E7%9C%8Bnginx%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E8%A2%AB%E5%AE%89%E8%A3%85%E3%80%82,%E9%85%8D%E7%BD%AENginx%20Nginx%E9%85%8D%E7%BD%AE%E7%9A%84%E6%96%B9%E6%B3%95%E6%9C%89%E5%BE%88%E5%A4%9A%E7%A7%8D%EF%BC%8C%E8%BF%99%E9%87%8C%E4%BB%8B%E7%BB%8D%E6%AF%94%E8%BE%83%E7%AE%80%E5%8D%95%E7%9A%84%E6%96%B9%E5%BC%8F%E3%80%82%20...%204%20Step4%20%E6%B7%BB%E5%8A%A0%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%20%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%B8%8D%E6%83%B3%E9%80%9A%E8%BF%87%E4%B8%80%E9%95%BF%E4%B8%B2ip%2Bport%E8%AE%BF%E9%97%AE%E4%BD%A0%E7%9A%84%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%EF%BC%8C%E8%80%8C%E6%98%AF%E9%80%9A%E8%BF%87%E5%9F%9F%E5%90%8D%EF%BC%8C%E8%AF%B7%E5%85%88%E8%87%AA%E5%A4%87%E4%B8%80%E4%B8%AA%E5%9F%9F%E5%90%8D%EF%BC%88%E5%A4%A7%E6%A6%82%E5%87%A0%E5%8D%81%E5%9D%97%E5%88%B0%E4%B8%80%E7%99%BE%E4%B8%80%E5%B9%B4%EF%BC%8C%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%B8%8D%E6%98%AF%E4%B9%B0%E7%9A%84.com%E9%82%A3%E7%A7%8D%EF%BC%89%E3%80%82%20)

## Powershell

### 环境变量

#### 1.设置环境变量

1. 临时生效（仅限当前会话）
```Powershell
$env:变量名 = "变量值"
```

2. 永久生效（对用户生效）
```Powershell
[Environment]::SetEnvironmentVariable("MY_VARIABLE", "SomeValue", "User")
```
这条命令不会立即影响到当前会话，你需要关闭并重新打开PowerShell窗口才能看到变化。

3. 使用 `setx` 命令（适用于旧版Windows或简单场景）

	虽然 `setx` 不是PowerShell专用的命令，但它也可以用来设置永久环境变量，对当前会话无效，但在新启动的命令提示符或PowerShell会话中生效：
	```Powershell
	setx MY_VARIABLE "SomeValue" /M
	```
	这里的 `/M` 参数表示设置系统级别的环境变量。使用 `setx` 后，你需要关闭并重新打开命令行界面才能看到变量。	

#### 2.删除环境变量
1. 对于当前会话：
如果你想从当前PowerShell会话中移除一个环境变量，可以使用 `Remove-Item` cmdlet，指定环境变量的名称。注意，这仅影响当前会话，不会改变注册表中的设置，因此重启PowerShell后变量会恢复。
```Powershell
Remove-Item -Path "Env:\VariableName"
```
2. 永久删除（用户级别）：
```Powershell
[Environment]::SetEnvironmentVariable("VariableName", "", "User")
```

