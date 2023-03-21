import { ThemeProvider } from 'styled-components'

import { About, Header } from '@/components'
import { GlobalStyle, defaultTheme } from '@/styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <About />
    </ThemeProvider>
  )
}
