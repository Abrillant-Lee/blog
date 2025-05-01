export const Friends: Friend[] = [
   {
    title: 'huigang39',
    description: '嵌入式佬:宇宙很大，生活更大。',
    website: 'https://github.com/huigang39',
    avatar: '/img/friend/gang.png',
  },
  {
    title: 'ryanzhang66',
    description: '埋头苦干的嵌入式领域探索者',
    website: 'https://github.com/ryanzhang66',
    avatar: '/img/friend/ran.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
