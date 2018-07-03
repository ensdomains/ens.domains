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

import { modulate } from '../../utils'

const StickyHeader = styled('header')`
  position: fixed;
  background: rgba(255, 255, 255, 255);
  top: 0;
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
    opacity: 1;
    transform: scale(1);
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
    transform: translate(-50%, -50%) scale(1);
    width: 30px;
    margin-bottom: 0;
    opacity: 1;
    ${mq.medium`
      width: 37px;
    `};
  }

  .social {
    opacity: 1;
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

class StickyHeaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.componentStyles = this.calculateStyles(props.withScroll)
  }

  componentWillReceiveProps(nextProps) {
    this.componentStyles = this.calculateStyles(nextProps.withScroll)
  }

  calculateStyles = scrollData => {
    if (!scrollData) {
      return {}
    }
    let { pageYOffset, bodyHeight = 1000 } = scrollData

    if (pageYOffset === null) {
      pageYOffset = 0
      bodyHeight = 1000
    }

    const stickyOpacity = modulate(
      pageYOffset,
      [bodyHeight + 25, bodyHeight + 200],
      [0, 1],
      true
    )

    const boxShadow = modulate(
      pageYOffset,
      [bodyHeight + 25, bodyHeight + 200],
      [0, 0.12],
      true
    )

    const smallLogoOpacity = modulate(
      pageYOffset,
      [bodyHeight - 100, bodyHeight],
      [0, 1],
      true
    )

    const stickyScale = modulate(
      pageYOffset,
      [bodyHeight - 200, bodyHeight],
      [0.7, 1],
      true
    )

    const stickyHeaderStyle = {
      background: `rgba(255,255,255, ${stickyOpacity})`,
      boxShadow: `2px 8px 25px 2px rgba(136, 149, 169, ${boxShadow})`,
    }

    const smallLogoStyle = {
      opacity: smallLogoOpacity,
      transform: `translate(-50%, -50%) scale(${stickyScale}`,
    }

    const acronymLogoStyle = {
      opacity: smallLogoOpacity,
      transform: `scale(${stickyScale}`,
    }

    const socialStyle = {
      opacity: smallLogoOpacity,
      transform: `scale(${stickyScale}`,
    }

    return {
      stickyHeaderStyle,
      smallLogoStyle,
      acronymLogoStyle,
      socialStyle,
    }
  }

  render() {
    const {
      stickyHeaderStyle = {},
      acronymLogoStyle = {},
      smallLogoStyle = {},
      socialStyle = {},
    } = this.componentStyles

    return (
      <StickyHeader style={stickyHeaderStyle}>
        <img
          style={acronymLogoStyle}
          className="typed-logo"
          src={typedLogo}
          alt="Ethereum Name Service"
        />
        <img style={smallLogoStyle} src={logoSmall} className="small-logo" />
        <div className="social" style={socialStyle}>
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

export default StickyHeaderContainer
