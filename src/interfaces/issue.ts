export type IssueItemResponse = {
  id: string
  html_url: string
  title: string
  user: {
    login: string
    id: string
    avatar_url: string
    html_url: string
  }
  comments: number
  created_at: string
  body: string
  number: number
}

export type IssueProps = {
  id: string
  title: string
  content: string
  url: string
  login: string
  createdAt: string
  comments: number
  total?: number
  number: number
}
