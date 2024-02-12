import {
  Container,
  IconsContainer,
  Content,
  Title,
  Description,
} from './styles'
import { GithubLogo, Buildings, UsersThree, ArrowUpRight } from 'phosphor-react'
import { memo, useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { LoadingIcon } from '../../styles'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  name: string
  company: string
  followers: number
}

function ProfileCardComponent() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const loadProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/diaspd`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProfileData()
  }, [loadProfileData])

  return (
    <Container>
      {isLoading && <LoadingIcon />}
      {!isLoading && (
        <>
          <img src={profileData.avatar_url} alt="profile picture" />
          <Content>
            <Title>
              {profileData.name}{' '}
              <a
                href="https://github.com/diaspd"
                target="_blank"
                rel="github noreferrer"
              >
                GITHUB <ArrowUpRight />
              </a>
            </Title>
            <Description>{profileData.bio}</Description>

            <IconsContainer>
              <div>
                <GithubLogo size={24} color="#3A536B" />
                <p>{profileData.name}</p>
              </div>

              <div>
                <Buildings size={24} color="#3A536B" />
                <p>{profileData.company}</p>
              </div>

              <div>
                <UsersThree size={24} color="#3A536B" />
                <p>{profileData.followers} seguidores</p>
              </div>
            </IconsContainer>
          </Content>
        </>
      )}
    </Container>
  )
}

export const ProfileCard = memo(ProfileCardComponent)
