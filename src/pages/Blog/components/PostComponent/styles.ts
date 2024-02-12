import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  display: grid;
  background-color: ${(props) => props.theme['gray-700']};
  border: 2px solid ${(props) => props.theme['gray-700']};
  width: 26rem;
  margin: 1rem 1rem;
  padding: 2rem;
  border-radius: 0.625rem;
  height: 16.25rem;
  text-decoration: none;
  color: ${(props) => props.theme['gray-100']};

  :hover {
    border: 2px solid ${(props) => props.theme['blue-300']};
    cursor: pointer;
  }

  :last-child {
    margin-bottom: 14.62rem;
  }

  @media (max-width: 864px) {
    max-width: 21rem;
    align-items: center;
    justify-content: center;
  }
`

export const Paragraph = styled.p`
  margin-top: 1.25rem;
  max-width: 23.5rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${(props) => props.theme['gray-300']};
  display: inline-block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const HeaderPost = styled.header`
  display: flex;
  align-items: stretch;
  gap: 3rem;

  @media (max-width: 864px) {
    max-width: 18rem;
  }

  strong {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.8rem;
    width: 100%;
  }

  span {
    margin-top: 0.2rem;
    width: 16rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
