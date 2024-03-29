import styled from 'styled-components'

import BackgroundImg from '../../assets/bg.svg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${BackgroundImg});
  padding-bottom: 10rem;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin: 4.12rem 0 1.35rem 5rem;
    height: 3rem;
    width: 3rem;
  }

  h1 {
    color: ${(props) => props.theme['blue-300']};
    font-weight: 500;
  }
`
