---
slug: Nushell
title: Nushell 
date: 2024-04-21
authors: nan
tags: [Nushell]
keywords: [Nushell]
description: Nushell 
---
官方中午文档：[介绍 | Nushell](https://www.nushell.sh/zh-CN/book/)

## 安装
1. windwos
	`winget install nushell`
	`scoop install nushell`

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
