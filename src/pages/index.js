import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends Component {
  render () {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostList>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Post key={node.fields.slug}>
                <Title>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </Title>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </Post>
            )
          })}
        </PostList>
      </Layout>
    )
  }
}

const PostList = styled.ul`
  margin: 40px auto 0 auto;
  max-width: 1000px;
  padding: 0 20px;
`

const Post = styled.li`
  border: 2px solid #6c5ce7;
  padding: 20px;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
`

const Title = styled.h3`
  font-size: 26px;

  > a {
    color: #6c5ce7;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
