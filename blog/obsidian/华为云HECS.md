---
slug: HECS
title: 华为云HECS
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
image: /img/blog/HuaWei_CLoud_HECS.png
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

## Linux宝塔

1、获取登录的默认地址、用户名和登录密码
```bash
sudo /etc/init.d/bt default
```
2、初始化宝塔选项
```bash
sudo /etc/init.d/bt
```
