import styled from 'styled-components'

export const InputForm = styled.form`
  margin-top: 4.5rem;
  max-width: 53.5rem;

  input {
    margin-top: 0.75rem;
    display: flex;
    width: 54rem;
    height: 3.12rem;
    background-color: ${(props) => props.theme['zinc-900']};
    border: 2px solid ${(props) => props.theme['gray-600']};
    padding: 0.8rem;
    border-radius: 0.375rem;
    color: ${(props) => props.theme['gray-300']};
    :not(:focus) {
      opacity: 0.8;
    }

    @media (max-width: 864px) {
      max-width: 20rem;
    }
  }

  @media (max-width: 864px) {
    max-width: 20rem;
  }
`

export const HeaderInput = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.1rem;
  }

  p {
    color: ${(props) => props.theme['gray-400']};
    font-size: 0.8rem;
  }

  @media (max-width: 864px) {
    width: 20rem;
  }
`
