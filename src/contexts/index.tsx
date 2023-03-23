import { ReactNode } from 'react'
import { GitHubProvider } from './githubContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <GitHubProvider>{children} </GitHubProvider>
}
