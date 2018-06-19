import React from 'react'
import styled from 'styled-components'
import avatar from '../../static/images/avatar.png'

const Avatar = () => (
  <Wrapper>
    <Image src={avatar} alt="My Pic"/>
    <Name>Lucas Stoque</Name>
    <Profession>Front-End Engineer</Profession>
    <Info>
      Currently living in Rio de Janeiro - Brasil and working at <Link href="http://wooza.com.br" target="_blank">Wooza</Link>
    </Info>
  </Wrapper>
)

const Wrapper = styled.div`
  color: #2d3436;

  @media (max-width: 992px) {
    text-align: center;
  }
`

const Image = styled.img`
  opacity: 0.8;
  width: 100px;
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
