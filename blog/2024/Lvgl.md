---
slug: /lvgl_learn
title: lvgl学习笔记
date: 2024-03-27
authors: nan
tags: [MCU, lvgl]
keywords: [MCU, lvgl ]
description: lvgl学习笔记
image: https://camo.githubusercontent.com/cec078a7e5f8ee1b897ec2f90da55841a1e0fa7f8cec9325d02def5d1a1444c3/68747470733a2f2f6c76676c2e696f2f6173736574732f696d616765732f6c6f676f5f6c76676c2e706e67
sticky: 4
---


## 1. LVGL简介

LVGL (Light and Versatile Graphics Library) 是一个开源的图形用户界面库，旨在提供轻量级、可移植、灵活和易于使用的图形用户界面解决方案。

它适用于嵌入式系统，可以在不同的操作系统、微控制器和图形加速器上运行。LVGL的核心代码是用C语言编写的，支持多种显示设备和输入设备，包括液显示屏、OLED显示屏、触摸屏、按键和编码器
等。


### LVGL的特点

1. 轻量级和高效:LVGL的核心代码非常小巧，可以在资源受限的嵌入式系统上运行，同时具有出色的性
能和速度。
2. 可移植性: LVGL支持多种处理器架构和提作系统，可以在不同的平台上使用。
3. 灵活性:LVGL提供了大量的可自定义选项，包括主题、字体、颜色、大小、形状等，可以根据项目需
求进行灵活定制。
4. 易于使用: LVGL提供了简单易懂的AI和丰富的文档，使开发人员可以快速上手，构建复杂的图形用户
界面。
5. 多种输入设备支持: LVGL支持多种输入设备，包括触摸屏、按键、编码器等，可以满足不同应用场景
的需求。
6. 多种组件支持:LVGL提供了多种常用组件，如政本框、按钮、滑动条、表格、菜单等，同时还支持自定义组件。
7. 兼容性: LVGL支持多种显示设备，包括LCD、OLED、ePaper等，可以适应不同的显示分辨率和屏幕
尺寸。
8. 社区支持: LVGL有一个活跃的社区，用户可以在社区中获得支持和帮助，同时也可以分享自己的经验
和贡献代码。

## 2. LVGL模拟器搭建


环境：WSL2(Ubuntu) + Platformio + VsCode 

[Run LittlevGL via PlatformIO](https://github.com/lvgl/lv_platformio?tab=readme-ov-file)

```bash
# wsl中安装依赖
sudo apt-get install libsdl2-dev

# clone官方提供的lvgl的platformio案例
git clone https://github.com/lvgl/lv_platformio.git

# code 打开项目
code lv_platformio

# 图形化界面安装platformio插件不再赘述
# 如果在vscode中使用platformio出现 Can not find working Python 3.6+ Interpreter的问题，安装以下依赖
sudo apt-get install python3-venv

# 点击Execute执行
```
![hello](/img/blog/lvgl_platformio.png)



