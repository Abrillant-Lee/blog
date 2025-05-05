---
slug: nan_Fedora
title: Fedora 42
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

# Fedora 42 日常开发与运维经验

> Fedora 是一个由社区主导、面向开发者和技术爱好者的 Linux 发行版，拥有最新的软件包和前沿的技术特性。本文系统性记录我在使用 Fedora 过程中的各种经验、常见问题及其解决方法，涵盖开发环境搭建、系统配置、软件管理、日常运维等多个方面，旨在为同样使用 Fedora 的开发者和运维人员提供参考和帮助。

---

## 📁 文件管理方案

### 分层文件夹结构：领域 — 子类别 — 项目

1. **数字前缀**：
   - 在根目录下给大类加 `01/02/03…` 前缀，保证排序固定、视觉分区明确。
2. **子文件夹细分**：
   - 每个大类内部再按项目、日期（如 `2025-03-项目名`）或内容类型（Docs、Code、Media）划分。
3. **统一命名规范**：
   - 中文/英文按场景统一，例如所有项目名用英文或拼音。
   - 文件名加上时间戳：`YYYYMMDD_简要描述.ext`，方便按时间排序。
4. **索引与说明**：
   - 在根目录放置 `README.md`，简述各文件夹用途和命名规则。
   - 每个大类也可放一个小的 `README.md`，写明子目录结构。

#### 原有文件夹管理示例

```shell
nan@fedora:/run/media/nan/PortableSSD$ ll
总计 26328
drwxrwxrwx 1 nan nan    12288  5月 1日 18:34 '$RECYCLE.BIN'
drwxrwxrwx 1 nan nan        0  5月 1日 11:25  0-节能管家交接
drwxrwxrwx 1 nan nan        0 2024年10月23日  3D打印
drwxrwxrwx 1 nan nan     4096  4月14日 22:56  飞书
drwxrwxrwx 1 nan nan        0  3月13日 13:15  华为大会
drwxrwxrwx 1 nan nan     4096  4月10日 11:19  李浩楠
drwxrwxrwx 1 nan nan     4096 2024年10月23日 '郑轻嵌入式22=03'
drwxrwxrwx 1 nan nan     4096  5月 2日 17:29  AR_new
drwxrwxrwx 1 nan nan     4096 2024年10月23日  A.SanDisk
drwxrwxrwx 1 nan nan     4096  5月 1日 15:38  backup-fedora-nan
drwxrwxrwx 1 nan nan     4096  4月30日 20:09  BaiduNetdiskDownload
drwxrwxrwx 1 nan nan     4096  5月 1日 21:17  book
drwxrwxrwx 1 nan nan     4096  5月 1日 17:09  Embedded
-rwxrwxrwx 2 nan nan 26885020  3月29日 00:37  fanyi-0.0.1-SNAPSHOT.jar
drwxrwxrwx 1 nan nan        0  5月 1日 11:26 'HUAWEI Pura 70 Pro'
drwxrwxrwx 1 nan nan        0 12月17日 01:22  Linux
drwxrwxrwx 1 nan nan     4096  4月25日 10:32  Maker
drwxrwxrwx 1 nan nan     4096  1月22日 12:20  Obsidian
drwxrwxrwx 1 nan nan     4096 11月27日 04:28  oh_sdk
drwxrwxrwx 1 nan nan        0  4月 7日 12:21 'SanDiskSecureAccess Settings'
drwxrwxrwx 1 nan nan     4096  4月 7日 12:26 'SanDiskSecureAccess Vault'
drwxrwxrwx 1 nan nan     4096  5月 1日 18:33 'System Volume Information'
drwxrwxrwx 1 nan nan     4096  2月 9日 00:01  yutto
```

#### 优化后推荐结构

```text
/  （移动硬盘根目录）
├── 01_Personal         # 个人相关：文档、读书笔记、照片等
│   ├── Books           # 电子书／读书笔记（原 “书”／“book工”）
│   ├── Photos          # 个人照片、活动照片
│   └── Papers          # 论文、简历等
│
├── 02_Projects         # 各类项目源码、资料
│   ├── EnergyManager   # 节能管家相关（原 “0-节能管家交接”）
│   ├── Embedded        # 嵌入式项目（原 “郑轻嵌入式22-03”、“Embedded”）
│   ├── LinuxToolkit    # Linux 相关脚本／配置（原 “Linux”）
│   ├── 3D_Printing     # 3D 打印模型（原 “3D打印”）
│   ├── AR_New          # AR 新试验（原 “AR_new”）
│   └── Others          # 其他小项目（oh_sdk、Maker、fanyi-0.0.1-SNAPSHOT.jar）
│
├── 03_Media            # 各类媒体文件
│   ├── Videos          # 会议、演讲等视频（华为大会、李浩楠演讲）
│   ├── Audio           # 讲座录音、音乐
│   └── Graphics        # 海报／图像设计
│
├── 04_Software_Tools   # 软件安装包／工具／笔记
│   ├── Backups         # 系统或应用备份（backup-fedora-nan）
│   ├── SanDiskSecure   # Sandisk 自带加密／设置（SanDiskSecureAccess Vault 等）
│   ├── ObsidianVault   # Obsidian 笔记库
│   └── Utilities       # 小工具（BaiduNetdiskDownload、yutto 等）
│
├── 05_Backup_Archive   # 归档：不常用但要留存
│   ├── SystemVolume    # System Volume Information
│   ├── $RECYCLE.BIN
│   └── Old_Drives      # 旧盘残留文件
│
└── README.md           # 根目录说明：简要罗列各大文件夹用途与命名规范
```

---

## 🖥️ Nvidia 驱动安装

Fedora 42 默认开源 nouveau 驱动，性能不如 NVIDIA 官方驱动，且不支持最新显卡和部分高级功能。

### 1. 添加 RPM Fusion 源

Fedora 官方不内置闭源驱动包，需要先启用 RPM Fusion 的 free 和 nonfree 仓库：

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### 2. 安装 NVIDIA 驱动及相关依赖

更新系统并安装内核开发包（确保内核头文件匹配）：

```bash
sudo dnf upgrade --refresh
sudo dnf install kernel-devel-$(uname -r) kernel-headers-$(uname -r) dkms
```

安装官方 NVIDIA 驱动（akmod 版本会在内核更新后自动重建模块）：

```bash
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia xorg-x11-drv-nvidia-cuda
```

> 只需 3D 加速可省略 `-cuda` 包。需支持 NVENC/VDPAU、OpenCL 可额外安装 `xorg-x11-drv-nvidia-cuda`、`nvidia-settings` 等。

### 3. 禁用 nouveau 驱动

为避免加载 nouveau，需要在内核启动时屏蔽它：

新建或编辑 `/etc/modprobe.d/disable-nouveau.conf`，写入：

```bash
blacklist nouveau
options nouveau modeset=0
```

重新生成 initramfs：

```bash
sudo dracut --force
```

这一步会把 nouveau 从初始 ramdisk 中去掉。

### 4. 重启并验证

```bash
sudo reboot
```

重启后，执行：

```bash
lspci -k | grep -A2 -E "(VGA|3D)"
```

确认输出类似：

```text
01:00.0 VGA compatible controller: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q]
    Kernel driver in use: nvidia
    Kernel modules: nvidiafb, nvidia_drm, nvidia
```

若看到 `nvidia` 而非 `nouveau`，说明官方驱动已生效。



## 切换工作区

需求：使用键盘切换工作区，而且更顺手、靠近手指

2. Vim 风格 H J K L 键

我习惯了键盘不离手，模拟 Vim 的 H J K L：

win  + H → 切换到左边工作区

win + L → 切换到右边工作区

ctrl + win + H → 应用切换到左边工作区

ctrl + win + L → 应用切换到右边工作区

---

## CAPS LOCK 键

安装并打开 GNOME Tweaks（调整工具）

在 键盘与鼠标 → 额外布局选项 → Caps Lock 键行为 中，选一个你喜欢的映射（如 “Caps Lock 当作 ESC”）


## B station

```bash
sudo dnf install python3-pip    # 如果还没装 pip
pip3 install --user you-get
you-get "https://www.bilibili.com/video/BV1Be41117fv"
```

> 本文内容会持续更新，欢迎收藏备用。

<!-- 后续内容将在此补充 -->
