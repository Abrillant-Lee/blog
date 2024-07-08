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
        'summer_ospp/Command/command-wpa',
      ],
    },
    // 其他星闪的应用案例
    {
      label: '其他星闪开发板',
      type: 'category',
      link: {
        type: 'generated-index', //生成索引
        title: '其他星闪开发板',
        description:
          "其他星闪开发板的使用案例",
        keywords: ['guides'],
        image: '/img/logo.png',
      },
      items: [
        'summer_ospp/nearlink_extra/nearlink-extra-guides'
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://example.com',
    },
  ],
  Tools:[
    "tools/introduction",
    {
      label: 'git',
      type: 'category',
      link: {
      type: 'doc',
      id: 'tools/git/git-guides',
      },
      items: [
        "tools/git/git-tag"
      ],
    },
    {
      label: 'docker',
      type: 'category',
      link: {
      type: 'doc',
      id: 'tools/docker/docker-guides',
      },
      items: [
      ],
    },



  ]

}

module.exports = sidebars
