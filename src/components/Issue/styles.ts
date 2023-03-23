import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;
  border-radius: 10px;

  > header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme['base-title']};
    }

    span {
      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
    }
  }

  main {
    color: ${(props) => props.theme['base-text']};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }
`
