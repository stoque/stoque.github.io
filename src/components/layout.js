import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global';
import Svgs from './svgs'
import Avatar from './avatar'


const Layout = ({ children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isIndex = location.pathname === rootPath

  return (
    <>
      <GlobalStyle />
      <Svgs />
      <ThemeProvider theme={theme}>
        <>
          <Avatar isIndex={isIndex}/>
          {children}
        </>
      </ThemeProvider>
    </>
  )
}

export default Layout
