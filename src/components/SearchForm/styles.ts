import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;

  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
