import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { routes } from '@/routes'
import { Header } from '@/components'

import { GlobalStyle, defaultTheme } from '@/styles'
import { AppProvider } from './contexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <Header />
        <RouterProvider router={routes} />
      </AppProvider>
    </ThemeProvider>
  )
}
