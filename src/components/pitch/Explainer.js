import React, { Component } from 'react'
import { TimelineMax, Power1 } from 'gsap'
import styled from 'react-emotion'
import { modulate } from '../../utils'
import { createInflateRaw } from 'zlib'

const BaseContainer = styled.div`
  overflow: hidden;
  margin: 100px 0;
  position: relative;
  height: 312px;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    position: absolute;
    left: 0;
    top: 0;
  }

  .bg-string {
    font-family: Overpass Mono;
    position: relative;
    color: #5284ff;
    font-size: 52px;
    line-height: 1em;
    text-wrap: nowrap;
    opacity: 0.15;
  }

  .hook {
    position: relative;
    z-index: 100;
    h2 {
      background: white;
    }

    p {
      background: white;
    }
  }
`

const hexStrings = [
  '3629BFA0637872Ca3E64bDa247D9Ea12D1F21358d2fe36a24a843ec72dd86f50554cd395dd4da9e5e6583e44770b13284fb3cb5e',
  'xd2fe36a24a843ec72dd86f50554cd395dd4da9e5e6583e44770b13284fb3cb5e3629bfa0637872ca3e64bda247d9ea12d1f21358',
  'xe65D7702E401B7febBDBB6CD21a3eB98b0F2C066d2fe36a24a843ec72dd86f50554cd395dd4da9e5e6583e44770b13284fb3cb5e',
  '3629BFA0637872Ca3E64bDa247D9Ea12D1F21358d2fe36a24a843ec72dd86f50554cd395dd4da9e5e6583e44770b13284fb3cb5e',
  '080e4d78e2884a1ea17e653cc2a311c5855f9acd560f43fa37eb463f91da27a6e65D7702E401B7febBDBB6CD21a3eB98b0F2C066',
  'FC18Cbc391dE84dbd87dB83B20935D3e89F5dd91080e4d78e2884a1ea17e653cc2a311c5855f9acd560f43fa37eb463f91da27a6',
]

class Explainer extends Component {
  constructor(props) {
    super(props)
    this.explainer = React.createRef()
    hexStrings.forEach((_, i) => {
      this['string' + i] = React.createRef()
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let explainer = this.explainer.current
    let explainerHeight = explainer.offsetHeight
    let explainerOffsetTop = explainer.offsetTop - bodyHeight
    let explainerOffsetBottom = explainer.offsetTop + bodyHeight + bodyHeight

    //console.log(event)
    console.log(explainerHeight)
    console.log(window.scrollY, explainerOffsetTop)

    let scrollRange1 = [explainerOffsetTop, explainerOffsetBottom]
    // let scrollRange2 = [0, 200]
    const left = modulate(window.pageYOffset, scrollRange1, [-400, 0], true)
    const left2 = modulate(window.pageYOffset, scrollRange1, [-200, 0], true)
    const left3 = modulate(window.pageYOffset, scrollRange1, [-300, 0], true)
    const left4 = modulate(window.pageYOffset, scrollRange1, [-350, 0], true)

    const right = modulate(window.pageYOffset, scrollRange1, [0, -400], true)

    this.string0.current.style.transform = 'translateX(' + left + 'px)'
    this.string1.current.style.transform = 'translateX(' + left2 + 'px)'
    this.string2.current.style.transform = 'translateX(' + left4 + 'px)'
    this.string3.current.style.transform = 'translateX(' + left2 + 'px)'
    this.string4.current.style.transform = 'translateX(' + left + 'px)'
    this.string5.current.style.transform = 'translateX(' + left3 + 'px)'

    // this.string0.current.style.transform = 'translateX(' + left + 'px)'
    // this.string1.current.style.transform = 'translateX(' + right + 'px)'
    // this.string2.current.style.transform = 'translateX(' + left + 'px)'
    // this.string3.current.style.transform = 'translateX(' + right + 'px)'
    // this.string4.current.style.transform = 'translateX(' + left + 'px)'
    // this.string5.current.style.transform = 'translateX(' + right + 'px)'
  }

  render() {
    return (
      <BaseContainer innerRef={this.explainer}>
        <div className="background">
          {hexStrings.map((s, i) => (
            <div className="bg-string" ref={this['string' + i]}>
              {s}
            </div>
          ))}
        </div>
        <div className="hook">
          <h2>No more long addresses</h2>
          <p>jack.mywallet.eth</p>
        </div>
      </BaseContainer>
    )
  }
}

export default Explainer
