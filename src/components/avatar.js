import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: #000;

  @media (max-width: 992px) {
    text-align: center;
  }
`

const Image = styled.img`
  opacity: 0.8;
  width: 140px;
`

const Name = styled.h1`
  font-size: 20px;
  font-weight: 300;
`

const Profession = styled.h2`
  font-size: 18px;
`

const Info = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin: 20px 0 0;

  @media (min-width: 992px) {
    width: 420px;
  }
`

const Link = styled.a`
  color: #6c5ce7;
  font-weight: 700;
  &:hover {
    text-decoration: none;
  }
`

const Avatar = () => (
  <Wrapper>
    <Image src="https://avatars0.githubusercontent.com/u/12236827?s=460&v=4" alt="My Pic"/>
    <Name>Lucas Stoque</Name>
    <Profession>Front-End Engineer</Profession>
    <Info>
      Currently living in Rio de Janeiro - Brasil and working at <Link href="http://wooza.com.br" target="_blank">Wooza</Link>
    </Info>
  </Wrapper>
)

export default Avatar
