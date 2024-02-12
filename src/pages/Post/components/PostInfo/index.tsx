import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Chat,
  GithubLogo,
} from 'phosphor-react'
import { dateFormatter } from '../../../../utils/formatter'
import { PostGithubProps } from '../../../Blog'
import { Container, Content, Title, IconsContainer } from './styles'

interface PostInfoProps {
  postData: PostGithubProps
}

export function PostInfo({ postData }: PostInfoProps) {
  const formattedDate = dateFormatter(postData?.created_at)

  return (
    <Container>
      <Content>
        <a href="/">
          <ArrowLeft />
          Voltar
        </a>
        <a href={postData.html_url} target="_blank" rel="github noreferrer">
          Ver no Github
          <ArrowUpRight />
        </a>
      </Content>

      <Title>{postData.title}</Title>

      <IconsContainer>
        <div>
          <GithubLogo size={24} color="#3A536B" />
          <p>{postData.user.login}</p>
        </div>

        <div>
          <Calendar size={24} color="#3A536B" />
          <p>{formattedDate}</p>
        </div>

        <div>
          <Chat size={24} color="#3A536B" />
          <p>{postData.comments} comentário(s)</p>
        </div>
      </IconsContainer>
    </Container>
  )
}
