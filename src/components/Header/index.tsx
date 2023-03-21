import { logoImg, backgroundHeaderImg } from '@/assets'

import { Container } from './styles'

export function Header() {
  return (
    <Container background={backgroundHeaderImg}>
      <img src={logoImg} alt="" />
    </Container>
  )
}
