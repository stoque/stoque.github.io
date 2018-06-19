import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import Svgs from '../components/svgs'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A website from a Front-End Enginner that love what it does' },
        { name: 'keywords', content: 'front-end, front, enginner, front end developer, brazil, rio de janeiro, brasil' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700', rel: 'stylesheet' }
      ]}
    />
    <Svgs/>
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
)

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

  ul {
    list-style: none;
  }
`
const Wrapper = styled.div`
  height: 94vh;

  @media (max-width: 992px) {
    padding: 40px;
  }

  @media (min-width: 992px) {
    padding: 200px 100px;
  }
`

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
