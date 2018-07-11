import React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import mq from '../../mediaQuery'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import logoSmall from '../../assets/ensIconLogo.svg'
import typedLogo from '../../assets/ENS_TypeLogo_Nav_57x22.svg'
import typedLogoWhite from '../../assets/ENS_TypeLogo_Nav_White.svg'
import medium from '../../assets/medium.svg'
import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import mediumBlack from './Medium_Black.svg'
import twitterBlack from './Twitter_Black.svg'
import githubBlack from './GitHub_Black.svg'

import { modulate } from '../../utils'

const StickyHeader = styled('header')`
  position: fixed;
  transition: background 0.2s ease-in-out;
  background: ${props =>
    props.menuOpen ? 'rgb(18, 29, 70)' : 'rgba(255,255,255,1)'};

  top: 0;
  height: 48px;
  width: 100%;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;
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

  .right-nav {
    height: 100px;
    opacity: 1;
    align-items: center;
    position: absolute;
    left: 100%;
    top: 48px;
    background: rgb(18, 29, 70);
    color: white;
    width: 100%;
    transition: all 0.2s ease-in-out;
    z-index: -1;
    ${props => (props.menuOpen ? `left: 0` : '')};
    ${mq.medium`
      transition: none;
      height: 100%;
      background: transparent;
      color: #2b2b2b;
      display: flex;
      width: auto;
      position: static;
    `};
  }

  .internal-nav {
    align-items: center;
    display: flex;
    height: auto;
    justify-content: center;

    a {
      color: white;
      text-decoration: none;
      font-size: 22px;
      font-weight: 100;
      padding: 20px;

      &:hover,
      &.current {
        color: #5284ff;
      }
    }

    ${mq.medium`
      height: 100%;
      margin-right: 20px;
      border-right: 1px solid #e9e9e9;

      a {
        font-size: 14px;
        font-weight: 900;
        letter-spacing: 1px;
        margin-right: 20px;
        text-transform: uppercase;
        color: #2b2b2b;
        transition: 0.2s;
  
        &:hover,
        &.current {
          color: #5284ff;
        }
      }
    `};
  }

  .mobile-nav {
    ${mq.medium`
      display: none;
    `};
  }

  .social {
    display: flex;
    justify-content: center;

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

  .hamburger {
    padding: 10px 0 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:is-active {
      padding-top: 15px;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }

  .hamburger-inner::after {
    content: '';
    display: none;
  }

  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse-r .hamburger-inner::before {
    transition: all 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: all 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--collapse-r.is-active .hamburger-inner,
  .hamburger--collapse-r.is-active .hamburger-inner::after,
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    background: #fff;
  }
`

class StickyHeaderContainer extends React.Component {
  state = {
    menuOpen: false,
  }

  constructor(props) {
    super(props)
    // this.componentStyles = this.calculateStyles(
    //   props.withScroll,
    //   this.state.menuOpen
    // )
  }

  // componentWillReceiveProps(nextProps) {
  //   this.componentStyles = this.calculateStyles(
  //     nextProps.withScroll,
  //     this.state.menuOpen
  //   )
  // }

  calculateStyles = (scrollData, menuOpen) => {
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

    const opacity = modulate(
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
      background: `rgba(${
        menuOpen ? '18, 29, 70' : '255,255,255'
      }, ${stickyOpacity})`,
      boxShadow: `2px 8px 25px 2px rgba(136, 149, 169, ${boxShadow})`,
    }

    const smallLogoStyle = {
      opacity,
      transform: `translate(-50%, -50%) scale(${stickyScale}`,
    }

    const acronymLogoStyle = {
      opacity,
      transform: `scale(${stickyScale}`,
    }

    const rightNavStyle = {
      background: `rgba(${
        menuOpen ? '18, 29, 70' : '255,255,255'
      }, ${stickyOpacity})`,
      opacity,
      transform: `scale(${stickyScale}`,
    }

    const internalNavStyle = {
      opacity: stickyOpacity,
      borderRight: `1px solid rgba(204,204,204,${stickyOpacity})`,
    }

    const mobileNavStyle = {
      opacity,
      transform: `scale(${stickyScale}`,
    }

    return {
      stickyHeaderStyle,
      smallLogoStyle,
      acronymLogoStyle,
      rightNavStyle,
      mobileNavStyle,
      internalNavStyle,
    }
  }

  render() {
    const {
      stickyHeaderStyle = {},
      acronymLogoStyle = {},
      smallLogoStyle = {},
      rightNavStyle = {},
      mobileNavStyle = {},
      internalNavStyle = {},
    } = this.calculateStyles(this.props.withScroll, this.state.menuOpen)

    return (
      <StickyHeader style={stickyHeaderStyle} menuOpen={this.state.menuOpen}>
        <Link to="/" style={acronymLogoStyle}>
          <img
            className="typed-logo"
            src={this.state.menuOpen ? typedLogoWhite : typedLogo}
            alt="Ethereum Name Service"
          />
        </Link>
        <img style={smallLogoStyle} src={logoSmall} className="small-logo" />
        <div className="mobile-nav" style={mobileNavStyle}>
          <button
            className={`hamburger hamburger--collapse-r ${
              this.state.menuOpen ? 'is-active' : ''
            }`}
            type="button"
            onClick={() =>
              this.setState({
                menuOpen: !this.state.menuOpen,
              })
            }
          >
            <span class="hamburger-box">
              <span class="hamburger-inner" />
            </span>
          </button>
        </div>
        <div className={`right-nav`} style={rightNavStyle}>
          <div className="internal-nav" style={internalNavStyle}>
            <Link to="/hack2018" activeClassName="current">
              Hackathon
            </Link>
          </div>
          <div className="social">
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
        </div>
      </StickyHeader>
    )
  }
}

export default StickyHeaderContainer
