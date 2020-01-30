import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostList = ({ posts }) => (
  <List>
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
  </List>
)

const List = styled.ul `
  margin: 40px auto 40px auto;
  max-width: 780px;
  padding: 0 20px;
`

const Post = styled.li `
  list-style: none;
  padding: 20px;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }

  > p {
    margin: 16px 0 0;
  }
`

const Title = styled.h3 `
  font-size: 22px;

  > a {
    color: ${p => p.theme.mainColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default PostList
