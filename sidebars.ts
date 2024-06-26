import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
   project: [
    // 开源之夏
    'summer_ospp/introduction',
    {
      label: '欧拉派',
      type: 'category',
      link: {
        type: 'doc',
        id: 'summer_ospp/HiEuler/hieuler-guides',
      },
      items: [
        'project/docusaurus/docusaurus-config',
      ],
    },
    {
      label: 'Hi3863',
      type: 'category',
      link: {
        type: 'doc',
        id: 'summer_ospp/HiEuler/hieuler-guides',
      },
      items: [
        'project/docusaurus/docusaurus-config',
      ],
    },

    'project/introduction',
    {
      label: 'Docusaurus 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'project/docusaurus/docusaurus-guides',
      },
      items: [
        'project/docusaurus/docusaurus-config',
        'project/docusaurus/docusaurus-style',
        'project/docusaurus/docusaurus-component',
        'project/docusaurus/docusaurus-plugin',
        'project/docusaurus/docusaurus-search',
        'project/docusaurus/docusaurus-comment',
        'project/docusaurus/docusaurus-deploy',
      ],
    },
  ],
  tools: [
    'tools/introduction',
  ],
}

module.exports = sidebars
