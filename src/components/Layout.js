import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Svgs from './svgs'
import Avatar from './avatar'

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Svgs />
    <ThemeProvider theme={theme}>
      <>
        <Avatar />
        {children}
      </>
    </ThemeProvider>
  </div>
)

const theme = {
  mainColor: '#6c5ce7'
}

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%
  }

  body {
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 992px) {
      display: flex;
      align-items: center;
    }
  }

  ul {
    list-style: none;
  }
`

export default Layout
