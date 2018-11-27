import React from 'react'
import Icon from './icon'
import styled from 'styled-components'

const SocialList = () => (
  <List>
    <Item>
      <Link href="https://github.com/stoque" alt="My GitHub" target="_blank">
        <Icon name="github"/>
      </Link>
    </Item>
    <Item>
      <Link href="https://www.linkedin.com/in/lucastoque/" alt="My Linkedin" target="_blank">
        <Icon name="linkedin"/>
      </Link>
    </Item>
    <Item>
      <Link href="https://codepen.io/stoque/" alt="My Codepen" target="_blank">
        <Icon name="codepen"/>
      </Link>
    </Item>
    <Item>
      <Link href="https://twitter.com/lucaslstoque" alt="My Twitter" target="_blank">
        <Icon name="twitter"/>
      </Link>
    </Item>
    <Item>
      <Link href="https://medium.com/@stoque" alt="My Medium" target="_blank">
        <Icon name="medium"/>
      </Link>
    </Item>
    <Item>
      <Link href="https://t.me/lucstoque" alt="My Telegram" target="_blank">
        <Icon name="telegram"/>
      </Link>
    </Item>
  </List>
)

const List = styled.ul`
  display: flex;
  margin: 20px 0 0;

  @media (max-width: 992px) {
    justify-content: center;
  }
`
const Item = styled.li`
  &:not(:last-child) {
    margin: 0 20px 0 0;
  }
`
const Link = styled.a`
  &:hover svg {
    fill: ${props => props.theme.mainColor};
  }
`

export default SocialList
