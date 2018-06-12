import React, { Component } from 'react'
import { TimelineMax, Power1 } from 'gsap'

class NameAnimation extends Component {
  constructor(props) {
    super(props)
    this.dom = React.createRef()
    this.tl = new TimelineMax()
  }
  componentDidMount() {
    this.tl.staggerFrom(
      this.dom.current.children,
      0.01,
      { opacity: 0, ease: Power1.easeIn },
      0.08,
      '+=0.1'
    )
  }
  render() {
    return (
      <div className="name-animation" ref={this.dom}>
        {this.props.children.split('').map((e, i) => <span key={i}>{e}</span>)}
      </div>
    )
  }
}

export default NameAnimation
