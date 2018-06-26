import React from 'react'
import styled from 'react-emotion'
import ensIconLogo from '../../assets/ensIconLogo.svg'
import twitter from '../../assets/twitter.svg'
import medium from '../../assets/medium.svg'
import github from '../../assets/github.svg'
import mq from '../../mediaQuery'

const BaseContainer = styled.section`
  background: #2c46a6;
  position: relative;

  .container-small {
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;

    ${mq.medium`
      flex-direction: row;
      justify-content: space-between;
    `};
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    ${mq.medium`
      margin-bottom: 0px;
    `};
  }

  .icon-logo {
    opacity: 0.2;
    width: 104px;
    order: -1;
    margin-bottom: 30px;

    ${mq.medium`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `};
  }

  .copyright {
    font-size: 20px;
    font-weight: 200;
    color: white;
    margin-bottom: 30px;
    ${mq.medium`
      margin-bottom: 10px;
    `};
  }

  .social {
    display: flex;
    flex-direction: column;
  }

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 16px;
    transition: 0.2s;
    display: block;
    position: relative;
    margin-bottom: 10px;

    img {
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translate(-10px, -70%);
      transition: 0.2s;
      opacity: 0.75;
    }

    .medium {
      transform: translate(-10px, -50%);
    }

    .twitter {
      transform: translate(-10px, -50%);
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
      img {
        opacity: 1;
      }
    }
  }

  .fb {
    height: 27px;
    width: 12px;
  }

  .twitter {
    width: 17px;
  }

  .medium {
    width: 15px;
  }

  .github {
    width: 19px;
  }
`

const Footer = () => (
  <BaseContainer>
    <div className="container-small">
      <div className="footer-left">
        <p className="copyright">© True Names LTD</p>
        <a href="http://docs.ens.domains/">Documentation</a>
        <a href="https://gitter.im/ethereum/go-ethereum/name-registry">
          Gitter
        </a>
      </div>
      <img className="icon-logo" src={ensIconLogo} />
      <div className="social">
        <a href="https://twitter.com/ensdomains">
          <img src={twitter} className="twitter" />
          Twitter
        </a>
        <a href="https://medium.com/the-ethereum-name-service">
          <img src={medium} className="medium" />
          Medium
        </a>
        <a href="https://medium.com/the-ethereum-name-service">
          <img src={github} className="github" />
          Github
        </a>
      </div>
    </div>
  </BaseContainer>
)

export default Footer
