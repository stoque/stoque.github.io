import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SocialList from './social-list'
import avatar from '../../static/images/avatar.png'

const Avatar = ({ isIndex }) => (
  <Wrapper>
    <StyledLink to="/">
      <Image src={avatar} alt="My Pic" isSmall={!isIndex} />
      {isIndex && (
        <>
          <Name>Lucas Stoque</Name>
          <Profession>Software Engineer</Profession>
        </>
      )}
    </StyledLink>

    {isIndex && (
      <Info>
        Currently living in Rio de Janeiro - Brazil and working at{' '}
        <a href="https://www.globo.com/" target="_blank">
          globo.com
        </a>
        {' | '}
        <a href="https://globoplay.globo.com/" target="_blank">
          globoplay
        </a>
      </Info>
    )}

    <SocialList />
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -100px;
  padding: 0 20px;
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.textColor};
  text-align: center;
  text-decoration: none;
`

const Image = styled.img`
  opacity: 0.9;
  border-radius: 100px;
  width: ${p => (p.isSmall ? '80px' : '160px')};
  transition: width 0.4s linear;
`

const Name = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.mainColor};
`

const Profession = styled.h2`
  font-size: 16px;
  font-weight: 300;
`

const Info = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin: 20px 0 0;
  text-align: center;
  line-height: 1.4;

  @media (min-width: 992px) {
    width: 420px;
  }

  > a {
    color: ${props => props.theme.mainColor};
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.1s linear;

    &:hover {
      transform: translateY(-2px);
    }
  }
`

export default Avatar
