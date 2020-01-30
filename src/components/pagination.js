import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Pagination = ({ previous, next }) => (
  <List>
    <Item>
      {previous && (
        <StyledLink to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </StyledLink>
      )}
    </Item>
    <Item>
      {next && (
        <StyledLink to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </StyledLink>
      )}
    </Item>
  </List>
)

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const Item = styled.li`
  list-style: none;
  margin: 0 20px;
`

const StyledLink = styled(Link)`
  border: 2px solid ${p => p.theme.mainColor};
  color: ${p => p.theme.mainColor};
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.2s linear;

  &:hover {
    background: ${p => p.theme.mainColor};
    color: #fff;
  }
`

export default Pagination