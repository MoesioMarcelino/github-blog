import {
  ArrowUpRightIcon,
  GithubIcon,
  ArrowLeftIcon,
  CommentIcon,
  CalendarIcon,
} from '@/assets/icons'
import { IssueProps } from '@/interfaces'
import { formatDate } from '@/utils'
import { useNavigate } from 'react-router-dom'

import { Container, Main, Header, Footer } from './styles'

export function AboutPost({
  url,
  login,
  comments,
  createdAt,
  title,
}: IssueProps) {
  const navigate = useNavigate()

  return (
    <Container>
      <Main>
        <Header>
          <a onClick={() => navigate('/')}>
            <ArrowLeftIcon />
            Voltar
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            ver no github
            <ArrowUpRightIcon />
          </a>
        </Header>
        <h2>{title}</h2>

        <Footer>
          <a href="https://moesiomarcelino.com" target="_blank">
            <span>
              <GithubIcon />
              {login}
            </span>
          </a>
          <span>
            <CalendarIcon />
            {formatDate(createdAt)}
          </span>
          <span>
            <CommentIcon />
            {comments} comentários
          </span>
        </Footer>
      </Main>
    </Container>
  )
}
