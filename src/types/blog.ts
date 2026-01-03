export interface BlogPost {
  id: string
  title: string
  readTime: string
  externalUrl: string
  description?: string
  content?: string
  date?: string
  author?: string
  tags?: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
