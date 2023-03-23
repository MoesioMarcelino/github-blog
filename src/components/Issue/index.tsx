import { IssueProps } from '@/interfaces'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '@/utils'

export function Issue({ id, number, title, createdAt, content }: IssueProps) {
  const navigate = useNavigate()

  function handleClickIssue() {
    return navigate(`/issues/${import.meta.env.PROD ? number : id}`)
  }


  return (
    <Container onClick={handleClickIssue}>
      <header>
        <h2>{title}</h2>
        <span>{formatDate(createdAt)}</span>
      </header>

      <main>{content}</main>
    </Container>
  )
}
