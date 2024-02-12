import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.white};
  margin: -6rem 20rem 0 20rem;
  width: 55rem;
  height: fit-content;
  border-radius: 0.65rem;
  padding: 1rem;

  @media (max-width: 952px) {
    display: flex;
    max-width: fit-content;
    min-width: 20rem;
    height: 20rem;
    align-items: center;
    flex-direction: column;
    height: 25rem;
  }
`

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['blue-300']};
    text-decoration: none;
  }

  @media (max-width: 952px) {
    margin: 0;
    max-width: 18rem;
    gap: 2.5rem;
  }
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.8rem;
  padding-bottom: 1.5rem;
  gap: 2rem;
  margin-top: 1rem;

  div {
    height: 1.62rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 0.5rem;

    @media (max-width: 1220px) {
      display: inline-block;
      width: 100%;
      margin-top: 1rem;
    }

    p {
      margin-top: 0.5rem;
      font-weight: regular;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  @media (max-width: 955px) {
    display: inline-block;
    width: 100%;
  }
`
