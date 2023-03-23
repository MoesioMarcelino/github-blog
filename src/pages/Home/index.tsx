import { Profile, IssueList } from '@/components'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <IssueList />
    </Container>
  )
}
