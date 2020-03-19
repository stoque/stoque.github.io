import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    color: ${theme.textColor};
    background: #201F22;
  }

  #___gatsby {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`
