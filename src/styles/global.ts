import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }
  body {
    font-family: 'Lexend', sans-serif;
    overflow-x: hidden;
    min-height: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
