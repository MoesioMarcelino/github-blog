import {
  ArrowUpRightIcon,
  GithubIcon,
  BuildingIcon,
  UserGroupIcon,
} from '@/assets/icons'
import { useGitHub } from '@/contexts/githubContext'
import { useCallback, useEffect, useState } from 'react'
import { Skeleton } from '../Skeleton'

import { Container, ContainerSkeleton, Main, Header, Footer } from './styles'

export function Profile() {
  const { profile, fetchProfile } = useGitHub()
  const [isLoading, setIsLoading] = useState(true)

  const loadProfile = useCallback(async () => {
    try {
      setIsLoading(true)
      await fetchProfile()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [fetchProfile])

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  const { avatarUrl, bio, blog, followers, htmlUrl, id, name } = profile

  if (isLoading) {
    return (
      <ContainerSkeleton>
        <Skeleton height="212px" radius="10px" width="100%" />
      </ContainerSkeleton>
    )
  }

  return (
    <Container>
      <img src={avatarUrl} alt={name} onClick={() => window.open('https://moesiomarcelino.com', '_blank')} />

      <Main>
        <Header>
          <h2>{name}</h2>
          <a href={htmlUrl} target="_blank" rel="noreferrer">
            Github
            <ArrowUpRightIcon />
          </a>
        </Header>
        <p>{bio}</p>

        <Footer>
          <span>
            <GithubIcon />
            {id}
          </span>
          <a href={blog} target="_blank" rel="noreferrer">
            <span>
              <BuildingIcon />
              {blog}
            </span>
          </a>
          <span>
            <UserGroupIcon />
            {followers} seguidor(es)
          </span>
        </Footer>
      </Main>
    </Container>
  )
}
