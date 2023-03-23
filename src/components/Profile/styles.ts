import styled from 'styled-components'

const containerCSS = styled.div`
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -90px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`

export const Container = styled(containerCSS)`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px 40px;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const ContainerSkeleton = styled(containerCSS)``

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  > p {
    margin-top: 16px;
    margin-bottom: 24px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
  }

  svg {
    width: 18px;
    path {
      fill: ${(props) => props.theme.blue};
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
  }

  svg {
    width: 18px;
    path {
      fill: ${(props) => props.theme['base-label']};
    }
  }
`
