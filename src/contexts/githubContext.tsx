import { IssueItemResponse, IssueProps, ProfileProps } from '@/interfaces'
import { apiClient } from '@/services'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface GitHubContextProps {
  issues: IssueProps[]
  currentIssue: IssueProps
  profile: ProfileProps
  fetchIssues: (query?: string) => Promise<void>
  fetchOneIssue: (issueId: string) => Promise<void>
  fetchProfile: () => Promise<void>
}

interface GitHubProviderProps {
  children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextProps)

const isPROD = import.meta.env.PROD
const buildQuery = (query?: string) =>
  `${query}repo:${import.meta.env.VITE_USERNAME_REPO}/github-blog`

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [profile, setProfile] = useState({} as ProfileProps)
  const [issues, setIssues] = useState([] as IssueProps[])
  const [currentIssue, setCurrentIssue] = useState({} as IssueProps)

  const fetchIssues = useCallback(async (query?: string) => {
    let issueList = [] as IssueProps[]
    if (isPROD) {
      const { data } = await apiClient.get<{ items: IssueItemResponse[] }>(
        '/search/issues',
        {
          params: {
            q: buildQuery(query),
          },
        },
      )

      issueList = data.items.map(
        ({
          user,
          body,
          comments,
          created_at,
          html_url,
          title,
          id,
          number,
        }) => ({
          title,
          content: body,
          url: html_url,
          comments,
          createdAt: created_at,
          id,
          login: user.login,
          number,
        }),
      )
    } else {
      const { data } = await apiClient.get<IssueItemResponse[]>(
        '/issues',
        query ? { params: { title_like: query } } : {},
      )
      issueList = data.map(
        ({
          user,
          body,
          comments,
          created_at,
          html_url,
          title,
          id,
          number,
        }) => ({
          title,
          content: body,
          url: html_url,
          comments,
          createdAt: created_at,
          id,
          login: user.login,
          number,
        }),
      )
    }
    setIssues(issueList)
  }, [])

  const getOneIssueClient = useCallback((issueId: string) => {
    return isPROD
      ? apiClient.get<IssueItemResponse>(`/repos/ ${issueId}`)
      : apiClient.get<IssueItemResponse>(`/issues/${issueId}`)
  }, [])

  const fetchOneIssue = useCallback(
    async (issueId: string) => {
      const { data } = await getOneIssueClient(issueId)

      const issueFetched = {
        login: data.user.login,
        comments: data.comments,
        content: data.body,
        createdAt: data.created_at,
        title: data.title,
        url: data.html_url,
        id: data.id,
        number: data.number,
      }

      setCurrentIssue(issueFetched)
    },
    [getOneIssueClient],
  )

  const fetchProfile = useCallback(async () => {
    const { data } = await apiClient.get('/users/moesiomarcelino')
    setProfile({
      ...data,
      htmlUrl: data.html_url,
      avatarUrl: data.avatar_url,
    })
  }, [])

  return (
    <GitHubContext.Provider
      value={{
        issues,
        currentIssue,
        fetchIssues,
        fetchOneIssue,
        profile,
        fetchProfile,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export function useGitHub() {
  const context = useContext(GitHubContext)

  if (!context) {
    console.error('useGitHub must be used within a GitHubProvider')
  }

  return useContext(GitHubContext)
}
