import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navigation = () => (
  <List>
    <Item>
      <StyledLink to="/about/">About</StyledLink>
    </Item>
    <Item>
      <StyledLink to="/work/">Work</StyledLink>
    </Item>
    <Item>
      <StyledLink to="/talks/">Talks</StyledLink>
    </Item>
  </List>
)

const List = styled.ul`
  display: flex;
  margin: 40px 0 0;

  @media (max-width: 992px) {
    justify-content: center;
  }
`
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`
const StyledLink = styled(Link)`
  color: gray;
  font-size: 16px;
  text-transform: lowercase;
  text-decoration: none;

  &:hover {
    color: #6c5ce7;
  }
`

export default Navigation
