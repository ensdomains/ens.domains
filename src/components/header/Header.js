import React from 'react'
import BG from '../../assets/heroBG.jpg'
import styled from 'react-emotion'
import logoSmall from '../../assets/logoSmall.png'
import logo from '../../assets/logo.png'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

const StickyHeader = styled('header')`
  position: fixed;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: scale(0.7);

  padding: 10px 0;
  z-index: 1000;

  img {
    margin-bottom: 0;
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
    console.log(this.header)
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
      [bodyHeight - 100, bodyHeight],
      [0, 1],
      true
    )

    const stickyScale = modulate(
      window.pageYOffset,
      [bodyHeight - 100, bodyHeight],
      [0.7, 1],
      true
    )

    //this.header.current.style.height = headerHeight + 'px'
    this.logo.current.style.width = logoWidth + '%'
    this.logo.current.style.marginBottom = `-${logoMargin}px`
    this.logo.current.style.opacity = logoOpacity
    this.stickyHeader.current.style.opacity = stickyOpacity
    this.stickyHeader.current.style.transform = `scale(${stickyScale}`
  }
  render() {
    return (
      <React.Fragment>
        <StickyHeader innerRef={this.stickyHeader}>
          <img src={logoSmall} />
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
