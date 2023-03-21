import { logoImg, backgroundHeaderImg } from '@/assets/images'

import { Container } from './styles'

export function Header() {
  return (
    <Container background={backgroundHeaderImg}>
      <img src={logoImg} alt="" />
    </Container>
  )
}
