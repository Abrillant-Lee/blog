---
slug: HECS
title: 华为云HECS 
date: 2024-04-20
authors: nan
tags: [HECS, Linux, Shell]
keywords: [HECS, Linux, Shell]
description: 华为云HECS
image: /img/blog/HuaWei_CLoud_HECS.png
---

弹性公网IP：119.3.211.142
宝塔 Linux 面板 8.0.5：https://119.3.211.142:8888


## 新建用户
>创建一个普通用户用于日常操作，只有在需要执行特定的管理员任务时，才使用root用户或者sudo命令。这样可以提高系统的安全性，同时也可以防止因为误操作导致的问题。

```
useradd nan -m
passwd nan
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
