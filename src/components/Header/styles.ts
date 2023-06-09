import styled from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.header<ContainerProps>`
  background: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 296px;
  width: 100vw;

  display: flex;
  justify-content: center;

  img {
    height: 98px;
    width: auto;

    margin-top: 48px;
  }
`
