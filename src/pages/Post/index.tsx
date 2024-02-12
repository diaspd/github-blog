import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { PostGithubProps } from '../Blog'
import { LoadingIcon } from '../Blog/styles'
import { Content } from './components/Content'
import { PostInfo } from './components/PostInfo'
import { HeaderContent, ContentContainer } from './styles'

export function Post() {
  const [postData, setPostData] = useState<PostGithubProps>(
    {} as PostGithubProps,
  )
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const loadPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/repos/diaspd/github-blog/issues/${id}`)
      setPostData(response.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    loadPostDetails()
  }, [loadPostDetails])

  return (
    <>
      <Header />
      <HeaderContent>
        {isLoading && <LoadingIcon />}
        {!isLoading && <PostInfo postData={postData} />}
      </HeaderContent>

      <ContentContainer>
        {!isLoading && (
          <>
            <Content content={postData.body} />
          </>
        )}
      </ContentContainer>
    </>
  )
}
