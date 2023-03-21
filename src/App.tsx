import { ThemeProvider } from 'styled-components'
import { Header } from './components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}
