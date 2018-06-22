import React from 'react'
import BG from '../../assets/heroBG.jpg'
import styled from 'react-emotion'
import logoSmall from '../../assets/logoSmall.png'
import logo from '../../assets/logo.png'
import medium from './medium.png'
import twitter from './twitter.png'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

const StickyHeader = styled('header')`
  position: fixed;
  background: white;
  height: 64px;
  width: 100%;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  z-index: 1000;

  h1 {
    opacity: 0;
    margin-left: 20px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    font-size: 16px;
    letter-spacing: 1px;
    transform: scale(0.7);
  }

  .small-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    width: 32px;
    height: 36px;
    margin-bottom: 0;
    opacity: 0;
  }

  .social {
    opacity: 0;
    margin-right: 20px;
    img {
      width: 32px;
      height: 31px;
      margin: 0 3px 0;

      &:last-child {
        margin-right: 0;
      }
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
      [bodyHeight + 200, bodyHeight + 400],
      [0, 1],
      true
    )

    const boxShadow = modulate(
      window.pageYOffset,
      [bodyHeight + 200, bodyHeight + 400],
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
          <h1 ref={this.acronymLogo}>ETHEREUM NAME SERVICE</h1>
          <img ref={this.logoSmall} src={logoSmall} className="small-logo" />
          <div className="social" ref={this.social}>
            <a href="https://twitter.com/ensdomains">
              <img src={twitter} className="twitter" />
            </a>
            <a href="https://medium.com/the-ethereum-name-service">
              <img src={medium} className="medium" />
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
