import './styles/fonts.css'
import './i18.ts'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import theme from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
