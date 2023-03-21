import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1021px;
  width: 100%;
  margin: 72px auto 200px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const ListSection = styled.section`
  margin-top: 48px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
`
