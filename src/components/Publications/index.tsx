import { SearchForm, Post } from '@/components'
import { Container, ListSection } from './styles'

export function Publications() {
  return (
    <Container>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <SearchForm />

      <ListSection>
        <Post />
        <Post />
        <Post />
      </ListSection>
    </Container>
  )
}
