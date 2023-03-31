import { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { PostComponent } from './components/PostComponent'
import { ProfileCard } from './components/ProfileCard'
import { SearchInput } from './components/SearchInput'
import {
  Container,
  ProfileContainer,
  SearchContainer,
  PostsContainer,
  Content,
  LoadingIcon,
} from './styles'

export interface PostGithubProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<PostGithubProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadPosts = useCallback(
    async (q: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${q}%20repo:diaspd/github-blog`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [setPosts],
  )

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  return (
    <Container>
      <Header />
      <ProfileContainer>
        <ProfileCard />
      </ProfileContainer>
      <SearchContainer>
        <SearchInput loadPosts={loadPosts} postsLength={posts.length} />
      </SearchContainer>

      <PostsContainer>
        <Content>
          <>
            {isLoading && <LoadingIcon />}
            {!isLoading &&
              posts.map((post) => (
                <PostComponent key={post.number} post={post} />
              ))}
          </>
        </Content>
      </PostsContainer>
    </Container>
  )
}
