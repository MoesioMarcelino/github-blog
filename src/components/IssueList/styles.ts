import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  max-width: 1021px;
  width: 100%;

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

export const IssuesSection = styled.section`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`
