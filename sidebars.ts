import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
   project: [
    // HiEuler
    'summer_ospp/introduction',
    {
      label: '欧拉派',
      type: 'category',
      link: {
        type: 'doc',
        id: 'summer_ospp/HiEuler/hieuler-guides',
      },
      items: [
        'summer_ospp/HiEuler/hieuler-process',
        'summer_ospp/HiEuler/hieuler-one',
      ],
    },
    // EulerCar
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
   // Command
    {
      label: 'Command',
      type: 'category',
      link: {
        type: 'doc',
        id: 'summer_ospp/Command/command-guides',
      },
      items: [
        'summer_ospp/Command/command-usermod',
        'summer_ospp/Command/command-record',
      ],
    },

    // 'project/introduction',
    // {
    //   label: 'Docusaurus 主题魔改',
    //   type: 'category',
    //   link: {
    //     type: 'doc',
    //     id: 'project/docusaurus/docusaurus-guides',
    //   },
    //   items: [
    //     'project/docusaurus/docusaurus-config',
    //     'project/docusaurus/docusaurus-style',
    //     'project/docusaurus/docusaurus-component',
    //     'project/docusaurus/docusaurus-plugin',
    //     'project/docusaurus/docusaurus-search',
    //     'project/docusaurus/docusaurus-comment',
    //     'project/docusaurus/docusaurus-deploy',
    //   ],
    // },
  ],
  tools: [
    'tools/introduction',
  ],
}

module.exports = sidebars
