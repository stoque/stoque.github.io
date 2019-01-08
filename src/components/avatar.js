import React from 'react'
import styled from 'styled-components'

import SocialList from './social-list';
import avatar from '../../static/images/avatar.png'

const Avatar = () => (
  <Wrapper>
    <Image src={avatar} alt="My Pic"/>
    <Name>Lucas Stoque</Name>
    <Profession>Front-End Engineer</Profession>
    <Info>
      Currently living in Rio de Janeiro - Brazil and working at <Link href="https://wooza.com.br" target="_blank">@wooza</Link>
    </Info>

    <SocialList />
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  color: #2d3436;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
`

const Image = styled.img`
  opacity: 0.9;
  width: 160px;
`

const Name = styled.h1`
  font-size: 22px;
  font-weight: 400;
`

const Profession = styled.h2`
  font-size: 18px;
  font-weight: 300;
`

const Info = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin: 20px 0 0;
  text-align: center;

  @media (min-width: 992px) {
    width: 420px;
  }
`

const Link = styled.a`
  color: gray;
  font-weight: 700;

  &:hover {
    color: ${props => props.theme.mainColor};
    text-decoration: none;
  }
`

export default Avatar
