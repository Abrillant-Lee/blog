export const projects: Project[] = [
  {
    title: 'STM32物联网实战',
    description: 'STM32+DHT11+ESP8266+WCS1800+增量式编码器',
    preview: '/img/project/物联网实战.png',
    website: 'https://github.com/Abrillant-Lee/STM32',
    source: 'https://github.com/Abrillant-Lee/STM32',
    tags: ['opensource', 'IoT', 'favorite'],
    type: '🤖Project',
  },
  {
    title: '个人网站',
    description: '（强烈推荐）参考nan的开源项目实现的个人博客（基于Docusaurus v2 静态网站生成器）',
    preview: '/img/project/blog.png',
    website: 'https://abrillant-lee.github.io',
    source: 'https://github.com/Abrillant-Lee.github.io',
    tags: ['opensource', 'design', 'favorite'],
    type: '📷Copy',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal' | 'IoT'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other' |'🤖Project' | '🌊Example' | '📷Copy'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
