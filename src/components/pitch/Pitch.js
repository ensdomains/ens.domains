import React from 'react'
import styled from 'react-emotion'
import Explainer from './Explainer'
import secure from '../../assets/secure.svg'
import hexagonBG from './hexagonFaded.png'
import circleBG from './circleFaded.png'
import distributed from '../../assets/distributed.svg'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

class ValueCard extends React.Component {
  render() {
    return (
      <div className="value-prop-card">
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

const PitchContainer = styled.div`
  margin: 100px auto 0;

  .value-prop {
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
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 276px;
    }

    .circle {
      display: block;
      content: '';
      background: url('${circleBG}');
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 261px;
      height: 261px;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 100px;

    ${mq.medium(`
      flex-direction: row;
    `)};
  }

  .value-prop-card {
    width: 100%;
    display: flex;
    flex-direction: column;


    ${mq.medium(`
      align-items: flex-start;
      width: 45%;
    `)};
    p {
      font-weight: 300;
    }

    img {
      align-self: center;
      max-width: 80%;
      ${mq.medium(`
        align-self: flex-start;
        max-width: 100%;
      `)};
    }
  }
`

class Pitch extends React.Component {
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

    let scrollRange1 = [elementOffsetTop, elementOffsetTop + 300]

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
      <PitchContainer>
        <p className="value-prop" ref={this.valueProp}>
          ENS offers a secure &amp; decentralised way to address resources both
          on and off the blockchain using simple,{' '}
          <strong>human-readable names.</strong>
          <div className="hexagon" ref={this.hexagon} />
          <div className="circle" ref={this.circle} />
        </p>
        <Explainer />
        <div className="card-container container">
          <ValueCard title="Secure." img={secure}>
            ENS operates in a distributed fashion for both its infrastructure
            and governance. Anyone can register a .eth domain name for
            themselves by participating in an auction process, mediated by the
            blockchain.
          </ValueCard>
          <ValueCard title="Truly distributed." img={distributed}>
            ENS operates in a distributed fashion for both its infrastructure
            and governance. Anyone can register a .eth domain name for
            themselves by participating in an auction process, mediated by the
            blockchain.
          </ValueCard>
        </div>
      </PitchContainer>
    )
  }
}

export default Pitch
