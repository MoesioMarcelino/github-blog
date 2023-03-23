import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'

import { AboutPost as IssueAbout, Skeleton } from '@/components'
import { useGitHub } from '@/contexts/githubContext'

import {
  Container,
  ContentContainer,
  HeaderSkeletonContainer,
  ContentSkeletonContainer,
} from './styles'

export function Post() {
  const { fetchOneIssue, currentIssue } = useGitHub()
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams<{ issueId: string }>()

  const loadPost = useCallback(async () => {
    try {
      setIsLoading(true)
      if (params.issueId) {
        await fetchOneIssue(params.issueId)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [fetchOneIssue, params.issueId])

  useEffect(() => {
    loadPost()
  }, [loadPost])

  return (
    <Container>
      {isLoading ? (
        <HeaderSkeletonContainer>
          <Skeleton height="212px" radius="10px" width="100%" />
        </HeaderSkeletonContainer>
      ) : (
        <IssueAbout {...currentIssue} />
      )}

      {isLoading ? (
        <ContentSkeletonContainer>
          <Skeleton height="600px" radius="10px" width="100%" />
        </ContentSkeletonContainer>
      ) : (
        <ContentContainer>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {currentIssue.content}
          </ReactMarkdown>
        </ContentContainer>
      )}
    </Container>
  )
}
