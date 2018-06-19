import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
  fill: rgba(0, 0, 0, 0.8);
  height: 22px;
  transition: fill 0.2s linear;
  width: 22px;
`

const Icon = (props) => (
  <Svg>
    <use xlinkHref={`#icon-${props.name}`}></use>
  </Svg>
)

export default Icon
