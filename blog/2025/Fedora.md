---
slug: nan_Fedora
title: Fedora系统开发与使用经验总结
date: 2025-05-03
authors: nan
tags:
  - Fedora
  - Linux
  - 系统运维
keywords:
  - Fedora
  - Linux
  - 开发环境
description: Fedora系统的日常开发与运维经验总结
image: https://abrillant-Lee.github.io/fedora/Fedora-nan1.jpg
---

## 前言

Fedora 是一个由社区主导、面向开发者和技术爱好者的 Linux 发行版，拥有最新的软件包和前沿的技术特性。本文将系统性地记录我在使用 Fedora 过程中的各种经验、常见问题及其解决方法，涵盖开发环境搭建、系统配置、软件管理、日常运维等多个方面，旨在为同样使用 Fedora 的开发者和运维人员提供参考和帮助。

## Nvidia driver installation

Fedora 42 上默认的是开源 nouveau 驱动，此驱动网络上风评很差，性能不如 NVIDIA 官方驱动，并且不支持最新的 NVIDIA 显卡和一些高级功能。

1. 添加 RPM Fusion 源
Fedora 官方不内置闭源驱动包，需要先启用 RPM Fusion 的 free 和 nonfree 仓库：
```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

2. 安装 NVIDIA 驱动及相关依赖
更新系统并安装内核开发包（确保内核头文件匹配）：
```
sudo dnf upgrade --refresh
sudo dnf install kernel-devel-$(uname -r) kernel-headers-$(uname -r) dkms
```
安装官方 NVIDIA 驱动（akmod 版本会在内核更新后自动重建模块）：
```bash
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia xorg-x11-drv-nvidia-cuda
```
如果你只需要 3D 加速，不打算做 CUDA 开发，可省略 -cuda 包。

若要支持 NVENC/VDPAU、OpenCL，还可额外安装 xorg-x11-drv-nvidia-cuda、nvidia-settings 等。

3. 禁用 nouveau 驱动
为了避免加载 nouveau，需要在内核启动时屏蔽它：

新建或编辑文件 /etc/modprobe.d/disable-nouveau.conf，写入：
```bash
blacklist nouveau
options nouveau modeset=0
```
重新生成 initramfs：
```bash
sudo dracut --force
```
这一步会把 nouveau 从初始 ramdisk 中去掉。

4. 重启并验证

```
sudo reboot
```

重启后，执行：
```bash
lspci -k | grep -A2 -E "(VGA|3D)"
```
---

确认输出类似：
```bash
01:00.0 VGA compatible controller: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q]
    Kernel driver in use: nvidia
    Kernel modules: nvidiafb, nvidia_drm, nvidia
```
若看到 nvidia 而非 nouveau，说明官方驱动已生效。

> 本文内容会持续更新，欢迎收藏备用。

<!-- 后续内容将在此补充 -->
