import React, { Component } from 'react'
import styled from 'react-emotion'

import hexagonBG from './hexagonFaded.png'
import circleBG from './circleFaded.png'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

const ValuePropContainer = styled.p`
  color: #2B2B2B;
  position: relative;
  padding: 20px 0;
  margin: 0 auto 0;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.3em;
  text-align: center;
  max-width: 75%;
  strong {
    font-weight: 500;
  }

  ${mq.medium(`
    padding: 100px 0;
    font-size: 34px;
  `)};

  .hexagon {
    display: block;
    content: '';
    background: url('${hexagonBG}');
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 207px;
    ${mq.medium(`
      width: 240px;
      height: 276px;
    `)};
  }

  .circle {
    display: block;
    content: '';
    background: center / cover url('${circleBG}');
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 195px;
    height: 195px;

    ${mq.medium(`
      width: 260px;
      height: 260px;
    `)};
  }
`

class ValueProp extends Component {
  constructor(props) {
    super(props)
    this.circle = React.createRef()
    this.hexagon = React.createRef()
    this.valueProp = React.createRef()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll)

    this.interval = setInterval(() => {
      if (this.didScroll === true) {
        this.didScroll = false
        this.handleScroll()
      }
    }, 50)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
    clearInterval(this.interval)
  }

  scroll = () => {
    this.didScroll = true
  }

  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let valueProp = this.valueProp.current
    let elementOffsetTop = valueProp.offsetTop - bodyHeight
    let elementOffsetBottom = valueProp.offsetTop + bodyHeight + bodyHeight

    let scrollRange1 = [elementOffsetTop + 200, elementOffsetTop + 600]

    const circleX = modulate(window.pageYOffset, scrollRange1, [-50, -15], true)
    const hexagonX = modulate(
      window.pageYOffset,
      scrollRange1,
      [-50, -85],
      true
    )

    this.hexagon.current.style.transform = 'translate(' + hexagonX + '%, -50%)'
    this.circle.current.style.transform = 'translate(' + circleX + '%, -50%)'
  }
  render() {
    return (
      <ValuePropContainer innerRef={this.valueProp}>
        {this.props.children}
        <span className="hexagon" ref={this.hexagon} />
        <span className="circle" ref={this.circle} />
      </ValuePropContainer>
    )
  }
}

export default ValueProp
