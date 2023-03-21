import {
  ArrowUpRightIcon,
  GithubIcon,
  BuildingIcon,
  UserGroupIcon,
} from '@/assets/icons'

import { Container, Main, Header, Footer } from './styles'

export function About() {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/37598129?v=4"
        alt="Moésio Marcelino"
      />

      <Main>
        <Header>
          <h2>Moésio Marcelino</h2>
          <a
            href="https://github.com/moesiomarcelino"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <ArrowUpRightIcon />
          </a>
        </Header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <Footer>
          <span>
            <GithubIcon />
            moesiomarcelino
          </span>
          <span>
            <BuildingIcon />
            ciandt
          </span>
          <span>
            <UserGroupIcon />
            32 seguidores
          </span>
        </Footer>
      </Main>
    </Container>
  )
}
