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

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.gray[100]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray[700]};
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
