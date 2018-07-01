import React from 'react'
import styled from 'react-emotion'
import BG from '../../assets/heroBG.jpg'
import { modulate } from '../../utils'
import logo from '../../assets/ENS_Logo_600x600.svg'
import mq from '../../mediaQuery'
import StickyHeader from './StickyHeader'

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
    console.log(this.refs)
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

    const stickyHeader = this.refs.stickyHeader.style
    stickyHeader.background = `rgba(255,255,255, ${stickyOpacity})`
    stickyHeader.boxShadow = `2px 8px 25px 2px rgba(136, 149, 169, ${boxShadow})`

    const logoSmall = this.refs.logoSmall
    logoSmall.style.opacity = smallLogoOpacity
    logoSmall.style.transform = `translate(-50%, -50%) scale(${stickyScale}`
    const acroLogo = this.refs.acronymLogo.style
    acroLogo.opacity = smallLogoOpacity
    acroLogo.transform = `scale(${stickyScale}`

    const social = this.refs.social.style

    social.opacity = smallLogoOpacity
    social.transform = `scale(${stickyScale}`
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader setRefs={refs => (this.refs = refs)} />
        <HeroBG innerRef={this.header}>
          <a href="#" className="logo">
            <img src={logo} className="ens-logo" ref={this.logo} />
          </a>
        </HeroBG>
      </React.Fragment>
    )
  }
}

export default Header
