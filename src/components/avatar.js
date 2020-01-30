import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SocialList from './social-list';
import avatar from '../../static/images/avatar.png'

const Avatar = ({ isIndex }) => (
  <Wrapper>
    <StyledLink to="/">
      <Image src={avatar} alt="My Pic" isSmall={!isIndex} />
      {isIndex &&
        <>
          <Name>Lucas Stoque</Name>
          <Profession>Front-End Engineer</Profession>
        </>
      }
    </StyledLink>

    {isIndex &&
      <Info>
        Currently living in Rio de Janeiro - Brazil and working at {' '}
        <a href="https://wooza.com.br" target="_blank">@wooza</a>
      </Info>
    }

    <SocialList />
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
  padding: 0 20px;
`

const StyledLink = styled(Link)`
  color: ${p => p.theme.textColor};
  text-align: center;
  text-decoration: none;
`

const Image = styled.img`
  opacity: 0.9;
  width: ${p => p.isSmall ? '80px' : '160px'};
  transition: width 0.4s linear;
`

const Name = styled.h1`
  font-size: 22px;
  font-weight: 400;
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

  @media (min-width: 992px) {
    width: 420px;
  }

  > a {
    color: gray;
    font-weight: 700;

    &:hover {
      color: ${props => props.theme.mainColor};
      text-decoration: none;
    }
  }
`

export default Avatar
