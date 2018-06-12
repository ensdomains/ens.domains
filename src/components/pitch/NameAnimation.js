import React, { Component } from 'react'
import { TimelineMax, Power1 } from 'gsap'
import cross from '../../assets/cross.png'
import tick from '../../assets/tick.svg'
import styled from 'react-emotion'

const NameAnimationContainer = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 32px;
    text-align: center;
  }
  .name {
    display: none;
  }
  .hash {
    display: none;
  }
  img {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

class NameAnimation extends Component {
  constructor(props) {
    super(props)
    this.hash = React.createRef()
    this.hash2 = React.createRef()
    this.hash3 = React.createRef()
    this.name = React.createRef()
    this.name2 = React.createRef()
    this.name3 = React.createRef()
    this.cross = React.createRef()
    this.tick = React.createRef()
    this.tl = new TimelineMax()
  }
  componentDidMount() {
    //console.log(this.cross)
    const hashStart = (node, num) => {
      this.tl.addLabel(`hashStart${num}`)
      this.tl.to(node, 0, { display: 'block' })
      this.tl.staggerFrom(
        node.children,
        0.01,
        { opacity: 0, ease: Power1.easeIn },
        0.05,
        '+=0.1'
      )
      this.tl.to(
        this.cross.current,
        0.4,
        { opacity: 1, ease: Power1.easeIn },
        `hashStart${num}+=2`
      )
      this.tl.addLabel(`hashEnd${num}`)
      this.tl.to(
        node,
        0.3,
        {
          opacity: 0,
          display: 'none',
          ease: Power1.easeIn,
        },
        `hashEnd${num}+=1`
      )
      this.tl.to(
        this.cross.current,
        0.4,
        { opacity: 0, ease: Power1.easeIn },
        `hashEnd${num}+=1`
      )
    }

    const nameStart = (node, num) => {
      this.tl.addLabel(`nameStart{num}`)

      this.tl.to(node, 0, { display: 'block' })
      this.tl.staggerFrom(
        node.children,
        0.01,
        { opacity: 0, ease: Power1.easeIn },
        0.08,
        '+=0.1'
      )
      this.tl.to(
        this.tick.current,
        0.4,
        { opacity: 1, ease: Power1.easeIn },
        '-=0.5'
      )
      this.tl.addLabel(`nameEnd${num}`)
      this.tl.to(
        this.tick.current,
        0.2,
        { opacity: 0, ease: Power1.easeIn },
        `nameEnd${num}+=2`
      )
      this.tl.to(node, 0, { display: 'none' }, `nameEnd${num}+=2`)
    }

    hashStart(this.hash.current, 1)
    nameStart(this.name.current, 1)
    hashStart(this.hash2.current, 2)
    nameStart(this.name2.current, 2)
    hashStart(this.hash3.current, 3)
    nameStart(this.name3.current, 3)
    this.tl.repeat(-1)
  }
  render() {
    return (
      <NameAnimationContainer className="name-animation">
        <img ref={this.cross} src={cross} />
        <img ref={this.tick} src={tick} />
        <p className="hash" ref={this.hash}>
          {'0x10abc565ef57aebf13e5eafc02fa864f8a1f5be'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name}>
          {'jack.mywallet.eth'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="hash" ref={this.hash2}>
          {'0x10abc565ef57aebf13e5eafc02fa864f8a1f5be'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name2}>
          {'ico.augur.eth'.split('').map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="hash" ref={this.hash3}>
          {'QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name3}>
          {'ipfs.mydapp.eth'.split('').map((e, i) => <span key={i}>{e}</span>)}
        </p>
      </NameAnimationContainer>
    )
  }
}

export default NameAnimation
