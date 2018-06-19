import React from 'react'
import Link from 'gatsby-link'
import Icon from './icon'
import styled from 'styled-components'

const BackButton = () => (
  <Button>
    <Link to="/">
      <Icon name="back"/>
      Back
    </Link>
  </Button>
)

const Button = styled.div`
  display: inline-block;
  border: 2px solid #000;

  a {
    align-items: center;
    color: #000;
    display: flex;
    padding: 10px 20px;
    text-decoration: none;
    transition: background 0.2s linear;

    svg {
      margin: 0 10px 0 0;
      transition: fill 0.2s linear;
    }

    &:hover {
      background: #000;
      color: #fff;

      svg {
        fill: #fff;
      }
    }
  }
`

export default BackButton
