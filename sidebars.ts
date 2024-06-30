import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
   Sumeer_OSPP2024: [
    // HiEuler
    'summer_ospp/introduction',
    {
      label: '开始上手',
      type: 'category',
      link: {
        type: 'generated-index', //生成索引
        // type: 'doc',
        // id: 'summer_ospp/HiEuler/hieuler-guides',
      },
      collapsed: false,//默认展开
      items: [
        'summer_ospp/HiEuler/hieuler-process',
        {
          label: '海鸥派',
          type: 'category',
          link: {
            type: 'doc',
            id: 'summer_ospp/HiEuler/hieuler-hieuler',
          },
          items: [
           'summer_ospp/HiEuler/hieuler-one',
          ],
        },
        {
          label: 'EulerCar',
          type: 'category',
          link: {
            type: 'doc',
            id: 'summer_ospp/EulerCar/eulercar-guides',
          },
          items: [
          ],
        },
      ],
    },
    // EulerCar

   // Command
    {
      label: '命令行',
      type: 'category',
      link: {
        type: 'generated-index', //生成索引
        title: 'Commands Record',
        description:
          "开发期间使用的疑难命令记录",
        keywords: ['guides'],
        image: '/img/logo.png',
      },
      items: [
        'summer_ospp/Command/command-usermod',
        'summer_ospp/Command/command-record',
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
  ],
}

module.exports = sidebars
