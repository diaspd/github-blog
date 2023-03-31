import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  display: flex;
  color: ${(props) => props.theme.white};
  margin: -6rem 22rem 0 22rem;
  width: 54rem;
  height: fit-content;
  border-radius: 0.65rem;
  padding: 0.5rem;
  justify-content: center;

  img {
    margin: 2rem;
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 864px) {
    display: flex;
    max-width: 20rem;
    height: 32rem;
    align-items: center;
    flex-direction: column;
  }
`

export const Content = styled.div`
  margin-top: 2rem;

  @media (max-width: 864px) {
    margin: 0 1.8rem;
    max-width: 20rem;
  }
`

export const Title = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    margin: 0 2rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme['blue-300']};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export const Description = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: regular;
  color: ${(props) => props.theme['gray-300']};
  line-height: 1.4rem;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;

  div {
    height: 1.62rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 864px) {
      display: inline-block;
    }

    p {
      font-weight: regular;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-200']};
    }
  }
`
