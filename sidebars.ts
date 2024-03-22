import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
    {
      label: 'Docusaurus 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/docusaurus/docusaurus-guides',
      },
      items: [
        'skill/docusaurus/docusaurus-config',
        'skill/docusaurus/docusaurus-style',
        'skill/docusaurus/docusaurus-component',
        'skill/docusaurus/docusaurus-plugin',
        'skill/docusaurus/docusaurus-search',
        'skill/docusaurus/docusaurus-comment',
        'skill/docusaurus/docusaurus-deploy',
      ],
    },

  ],
  tools: [
    'tools/introduction',
  ],
}

module.exports = sidebars
