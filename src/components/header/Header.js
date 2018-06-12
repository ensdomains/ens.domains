import React from 'react'
import Link from 'gatsby-link'
import BG from './Hero_BG.jpg'
import styled from 'react-emotion'

const HeroBG = styled('div')`
  background: url(${BG});
  background-size: cover;
  background-position: center center;
  height: 500px;
  width: 100%;
`

const Header = ({ siteTitle }) => (
  <HeroBG>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </HeroBG>
)

export default Header
