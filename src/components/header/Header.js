import React from 'react'
import styled from 'react-emotion'
import BG from '../../assets/heroBG.jpg'
import logoSmall from '../../assets/ENS_Logo_Nav_84x84.svg'
import logo from '../../assets/ENS_Logo_600x600.svg'
import typedLogo from '../../assets/ENS_TypeLogo_Nav_57x22.svg'
import medium from './Medium_Icon_11x9.svg'
import twitter from './Twitter_Icon_12x10.svg'
import github from './GitHub_Icon_13x13.svg'
import mediumBlack from './Medium_Black.svg'
import twitterBlack from './Twitter_Black.svg'
import githubBlack from './GitHub_Black.svg'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

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
          background: black;
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

const HeroBG = styled('div')`
  background: url(${BG});
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    ${mq.medium`
      width: 30%
    `};

    ${mq.large`
      width: 20%
    `};
  }
  .ens-logo {
    width: 100%;
    margin-bottom: 15px;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.header = React.createRef()
    this.logo = React.createRef()
    this.stickyHeader = React.createRef()
    this.acronymLogo = React.createRef()
    this.logoSmall = React.createRef()
    this.social = React.createRef()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let scrollRange1 = [0, bodyHeight]
    let scrollRange2 = [0, 200]
    const headerHeight = modulate(
      window.pageYOffset,
      scrollRange1,
      [bodyHeight, 100],
      true
    )

    const logoWidth = modulate(
      window.pageYOffset,
      scrollRange1,
      [100, 50],
      true
    )

    const logoMargin = modulate(
      window.pageYOffset,
      scrollRange1,
      [0, bodyHeight],
      true
    )

    const logoOpacity = modulate(
      window.pageYOffset,
      [bodyHeight - 150, bodyHeight],
      [1, 0],
      true
    )

    const stickyOpacity = modulate(
      window.pageYOffset,
      [bodyHeight + 25, bodyHeight + 200],
      [0, 1],
      true
    )

    const boxShadow = modulate(
      window.pageYOffset,
      [bodyHeight + 25, bodyHeight + 200],
      [0, 0.12],
      true
    )

    const smallLogoOpacity = modulate(
      window.pageYOffset,
      [bodyHeight - 100, bodyHeight],
      [0, 1],
      true
    )

    const stickyScale = modulate(
      window.pageYOffset,
      [bodyHeight - 200, bodyHeight],
      [0.7, 1],
      true
    )

    //this.header.current.style.height = headerHeight + 'px'
    this.logo.current.style.width = logoWidth + '%'
    this.logo.current.style.marginBottom = `-${logoMargin}px`
    this.logo.current.style.opacity = logoOpacity

    const stickyHeader = this.stickyHeader.current.style
    stickyHeader.background = `rgba(255,255,255, ${stickyOpacity})`
    stickyHeader.boxShadow = `2px 8px 25px 2px rgba(136, 149, 169, ${boxShadow})`

    const logoSmall = this.logoSmall.current
    logoSmall.style.opacity = smallLogoOpacity
    logoSmall.style.transform = `translate(-50%, -50%) scale(${stickyScale}`
    const acroLogo = this.acronymLogo.current.style
    acroLogo.opacity = smallLogoOpacity
    acroLogo.transform = `scale(${stickyScale}`

    const social = this.social.current.style

    social.opacity = smallLogoOpacity
    social.transform = `scale(${stickyScale}`
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader innerRef={this.stickyHeader}>
          <img
            ref={this.acronymLogo}
            className="typed-logo"
            src={typedLogo}
            alt="Ethereum Name Service"
          />
          <img ref={this.logoSmall} src={logoSmall} className="small-logo" />
          <div className="social" ref={this.social}>
            <a href="https://twitter.com/ensdomains">
              <img src={twitter} className="twitter" />
              <img src={twitterBlack} className="twitter-mobile" />
            </a>
            <a href="https://medium.com/the-ethereum-name-service">
              <img src={medium} className="medium" />
              <img src={mediumBlack} className="medium-mobile" />
            </a>
            <a href="https://github.com/ensdomains">
              <img src={github} className="github" />
              <img src={githubBlack} className="github-mobile" />
            </a>
          </div>
        </StickyHeader>
        <HeroBG innerRef={this.header}>
          <a href="#" className="logo">
            <img src={logo} className="ens-logo" ref={this.logo} />
            {/* <div className="name-service">Name Service</div> */}
          </a>
        </HeroBG>
      </React.Fragment>
    )
  }
}

export default Header
