import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin-top: 2.5rem;

  img {
    width: 100%;
  }

  p {
    line-height: 2rem;
    font-weight: regular;
    color: ${(props) => props.theme['gray-300']};
  }

  a {
    color: ${(props) => props.theme['blue-300']};
    margin: 2rem 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme['blue-300']};
  }
`
