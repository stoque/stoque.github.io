import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Avatar from '../components/avatar'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
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
  }
`

const Wrapper = styled.div`
  height: 94vh;

  @media (max-width: 992px) {
    padding: 20px;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700', rel: 'stylesheet' }
      ]}
    />
    <Wrapper>
      <Avatar/>
    </Wrapper>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
