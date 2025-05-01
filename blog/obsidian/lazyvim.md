---
title: lazyvim的日常使用
slug: /lazyvim
date: 2024-02-14
authors: nan
tags: [nvim, lazyvim]
keywords: [nvim, lazyvim]
image: /img/blog/lazyvim.jpg
---

## 更换lazyvim的默认终端为powershell

>lazyvim默认的终端使用的是cmd，cmd命令行的体验实在是太差了，所以想要更换为powershell。

- 解决方法：下载toogleterm插件，然后在插件配置文件中设置终端为powershell
- 最终效果：按下`<c+\>`即可在nvim中打开/关闭powershell终端

```powershell
# 1、进入nvim的插件目录
cd $env:APPDATA\nvim\plugged
# 2、下载并配置toogleterm插件
touch toogelterm.vim
# 3、编辑toogleterm.vim,内容如下：
nvim toogleterm.vim
```

- toogleterm.vim内容如下：

```vim
return {
  "akinsho/toggleterm.nvim",
  keys = {
    { [[<C-\>]] },
    { "<leader>0", "<Cmd>2ToggleTerm<Cr>", desc = "Terminal #2" },
  },
  cmd = { "ToggleTerm", "TermExec" },
  opts = {
    shell = "C:\\Users\\nan\\AppData\\Local\\Microsoft\\WindowsApps\\Microsoft.PowerShell_8wekyb3d8bbwe\\pwsh.exe",
    size = 20,
    hide_numbers = true,
    open_mapping = [[<C-\>]],
    shade_filetypes = {},
    shade_terminals = false,
    shading_factor = 0.3,
    start_in_insert = true,
    persist_size = true,
    direction = "float",
    winbar = {
      enabled = false,
      name_formatter = function(term)
        return term.name
      end,
    },
  },
}