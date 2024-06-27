---
id: hieuler-guides
slug: /hieuler-guides
title: 欧拉派
authors: nan 
keywords:
  - 星闪
  - 开源之夏
  - 欧拉派
---

1. 欧拉派资料检索
   - [欧拉派海鸥系列 — openEuler Embedded 在线文档 24.03 documentation](https://embedded.pages.openeuler.org/master/bsp/arm64/hieulerpi/index.html)  
   - [HiEuler: 易百纳社区及合作伙伴为欧拉派海鸥系列开发板提供板级驱动和参考案例的代码仓。(gitee.com)](https://gitee.com/hieuler)  
   - [欧拉派 — Ebaina·AI](http://wiki.ebaina.com/%E6%AC%A7%E6%8B%89%E6%B4%BE/index.html)
   - 淘宝商家提供: https://pan.baidu.com/s/15DOt0kDf0LXUxEp3V-PXYQ?pwd=9wa4 提取码: 9wa4 
   - [欧拉派使用指南](http://wk.ebaina.com/docs/eulerpi_ebaina/eulerpi_ebaina-1f9ok7ciljr25)

2. 开发实物
   - 购买的海鸥派实物

  <img src="https://abrillant-lee.github.io/Summer-OSPP2024/海鸥派-包装盒.jpg" width="600"/>

3. 实物配置
    - 海鸥派商业及4GB+32GB（星闪）
    - IMX347摄像头
    - 1转4路SENSOR转接板（4路2lane）
    - 亚克力外壳（含风扇）

   <img src="https://abrillant-lee.github.io/Summer-OSPP2024/海鸥派-start.jpg" width="600"/>

   - 使用亚克力板组装后

   <img src="https://abrillant-lee.github.io/Summer-OSPP2024/海鸥派-亚克力板封装.jpg" width="600"/>


1. 更新 browserslist 数据库以解决 caniuse-lite 过时的警告：
   - 运行 `npx browserslist@latest --update-db`

2. 解决 Docusaurus 构建错误，错误信息提示无法在上下文中找到当前侧边栏：
   - 检查文档配置文件（如 `sidebars.js` 或 `sidebars.json`），确保引用的文档 ID 或路径正确无误。
   - 确认所有文档都已正确分类到侧边栏中，特别是提到的 `/docs/docusaurus-guides` 路径。

3. 如果问题仍然存在，考虑检查 Docusaurus 的版本兼容性问题或查看 Docusaurus 社区和文档寻求更具体的解决方案。