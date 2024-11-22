import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const theme = {
  colors: {
    primary: '#343330',
    primaryForeground: '#fff',
    secondary: '#3E3D3Ade',
    secondaryForeground: '#fff',
    shadow: 'rgba(60, 64, 43, .2)',
    border: '#3c402b',
    hover: '#3c402b44',
    hoverSecondary: '#A4B55B',
    background: '#c4e456',
    danger: '#ff3333cc',
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

