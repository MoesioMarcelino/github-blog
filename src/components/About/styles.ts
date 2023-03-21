import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  width: 100%;
  max-width: 1021px;
  margin: 0 auto;

  padding: 32px 40px;
  border-radius: 10px;

  margin-top: -90px;

  display: flex;
  gap: 32px;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  > p {
    margin-top: 8px;
    margin-bottom: 24px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 0;
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
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    width: 18px;
    path {
      fill: ${(props) => props.theme['base-label']};
    }
  }
`
