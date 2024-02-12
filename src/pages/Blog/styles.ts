import styled from 'styled-components'
import { SpinnerGap } from 'phosphor-react'

export const Container = styled.div``

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 864px) {
    display: flex;
    justify-content: center;
  }
`

export const PostsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  @media (max-width: 864px) {
    display: flex;
  }
`

export const LoadingIcon = styled(SpinnerGap)`
  margin-top: 2rem;
  height: 2rem;
  width: 2rem;

  animation: rotation 3s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 864px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
