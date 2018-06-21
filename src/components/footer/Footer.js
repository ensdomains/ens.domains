import React from 'react'
import styled from 'react-emotion'
import fb from './facebook.png'
import twitter from './twitter.png'
import medium from './medium.png'

const BaseContainer = styled.section`
  background: #e9f1fe;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 20px 0;
  }

  .fb {
    height: 27px;
    width: 12px;
  }

  .twitter {
    height: 25px;
    width: 30px;
  }

  .medium {
    height: 24px;
    width: 30px;
  }
`

const Footer = () => (
  <BaseContainer>
    <a href="https://twitter.com/ensdomains">
      <img src={twitter} className="twitter" />
    </a>
    <a href="https://medium.com/the-ethereum-name-service">
      <img src={medium} className="medium" />
    </a>
  </BaseContainer>
)

export default Footer
