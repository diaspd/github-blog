import styled from 'styled-components'

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1f 1fr;

  div {
    margin-top: 2.5rem;
    margin-bottom: 10.5rem;
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 0.12rem;
    padding: 1rem;
    width: 100%;
  }

  @media (max-width: 952px) {
    margin: 1rem;
  }
`
