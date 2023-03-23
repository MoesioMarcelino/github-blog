import { useGitHub } from '@/contexts/githubContext'
import { useDebounce } from '@/hooks'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Issue } from '../Issue'
import { SearchForm } from '../SearchForm'
import { Skeleton } from '../Skeleton'

import { Container, IssuesSection } from './styles'

export function IssueList() {
  const { issues, fetchIssues } = useGitHub()

  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const queryDebounced = useDebounce<string>(query)

  const loadIssues = useCallback(async () => {
    try {
      setIsLoading(true)
      await fetchIssues(queryDebounced)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [fetchIssues, queryDebounced])

  useEffect(() => {
    loadIssues()
  }, [loadIssues])
  return (
    <Container>
      <header>
        <h3>Issues</h3>
        {isLoading ? (
          <Skeleton height="22px" radius="4px" width="100px" />
        ) : (
          <span>{issues.length} issues</span>
        )}
      </header>

      <SearchForm
        value={query}
        placeholder="Busque por issues"
        disabled={isLoading}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      {isLoading ? (
        <IssuesSection>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} height="208px" radius="10px" width="100%" />
          ))}
        </IssuesSection>
      ) : (
        <IssuesSection>
          {issues.length > 0 &&
            issues.map((issue) => <Issue key={issue.id} {...issue} />)}
        </IssuesSection>
      )}
    </Container>
  )
}
