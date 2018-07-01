import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSmall from '../../assets/ensIconLogo.svg'
import typedLogo from '../../assets/ENS_TypeLogo_Nav_57x22.svg'
import medium from '../../assets/medium.svg'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import mediumBlack from './Medium_Black.svg'
import twitterBlack from './Twitter_Black.svg'
import githubBlack from './GitHub_Black.svg'

const StickyHeader = styled('header')`
  position: fixed;
  background: rgba(255, 255, 255, 0);
  height: 48px;
  width: 100%;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 25px 10px 25px;
  z-index: 1000;

  ${mq.medium`
    height: 64px;
  `};

  .typed-logo {
    opacity: 0;
    transform: scale(0.7);
    margin: 0;
    width: 40px;

    ${mq.medium`
      width: 57px;
    `};
  }

  .small-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    width: 30px;
    margin-bottom: 0;
    opacity: 0;
    ${mq.medium`
      width: 37px;
    `};
  }

  .social {
    opacity: 0;
    display: flex;
    a {
      background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      margin: 0 3px 0;
      transition: 0.2s ease-in-out;
      ${mq.medium`
        background: black;
        width: 32px;
        height: 32px;
      `};
      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background: white;
      }

      ${mq.medium`
        &:hover {
          background: #5284FF;
        }

      `};
    }
    .github,
    .github-mobile {
      width: 13px;
    }
    .twitter,
    .twitter-mobile {
      width: 12px;
    }
    .medium,
    .medium-mobile {
      width: 11px;
    }

    .medium,
    .github,
    .twitter {
      display: none;
    }

    ${mq.medium`
      .medium, .github, .twitter {
        display: block
      }

      .medium-mobile, .github-mobile, .twitter-mobile {
        display: none
      }
    `};
    img {
      display: block;
    }
  }
`

class StickHeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setRefs({
      stickyHeader: this.stickyHeader,
      social: this.social,
      acronymLogo: this.acronymLogo,
      logoSmall: this.logoSmall,
    })
  }
  render() {
    return (
      <StickyHeader innerRef={el => (this.stickyHeader = el)}>
        <img
          ref={el => (this.acronymLogo = el)}
          className="typed-logo"
          src={typedLogo}
          alt="Ethereum Name Service"
        />
        <img
          ref={el => (this.logoSmall = el)}
          src={logoSmall}
          className="small-logo"
        />
        <div className="social" ref={el => (this.social = el)}>
          <OutboundLink href="https://twitter.com/ensdomains">
            <img src={twitter} className="twitter" />
            <img src={twitterBlack} className="twitter-mobile" />
          </OutboundLink>
          <OutboundLink href="https://medium.com/the-ethereum-name-service">
            <img src={medium} className="medium" />
            <img src={mediumBlack} className="medium-mobile" />
          </OutboundLink>
          <OutboundLink href="https://github.com/ensdomains">
            <img src={github} className="github" />
            <img src={githubBlack} className="github-mobile" />
          </OutboundLink>
        </div>
      </StickyHeader>
    )
  }
}

export default StickHeaderContainer
