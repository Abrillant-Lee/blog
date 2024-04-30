---
slug: Powershell
title: Powershell
date: 2024-04-30
authors: nan
tags: [powershell]
keywords: [powershell]
description: powershell
---
## 环境变量

### 1.设置环境变量

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

### 2.删除环境变量
1. 对于当前会话：
如果你想从当前PowerShell会话中移除一个环境变量，可以使用 `Remove-Item` cmdlet，指定环境变量的名称。注意，这仅影响当前会话，不会改变注册表中的设置，因此重启PowerShell后变量会恢复。
```Powershell
Remove-Item -Path "Env:\VariableName"
```
2. 永久删除（用户级别）：
```Powershell
[Environment]::SetEnvironmentVariable("VariableName", "", "User")
```