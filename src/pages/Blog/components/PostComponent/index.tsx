import { PostGithubProps } from '../../'
import { dateFormatter } from '../../../../utils/formatter'
import { PostContainer, HeaderPost, Paragraph } from './styles'

interface PostProps {
  post: PostGithubProps
}

export function PostComponent({ post }: PostProps) {
  const formattedDate = dateFormatter(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <HeaderPost>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </HeaderPost>

      <Paragraph>{post.body}</Paragraph>
    </PostContainer>
  )
}
