import React, { Component } from 'react'
import styled from 'react-emotion'
import { importAll, modulate } from '../../utils'
import mq from '../../mediaQuery'

const ScrollingShapesContainer = styled.div`
  .bg-images img {
    position: absolute;
    z-index: -1;
    max-width: 50%;
    ${mq.medium`
    max-width: 100%;
  `};
  }

  .hexagon1 {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .hexagon2 {
    right: 0;
    top: 50%;
  }

  .circle1 {
    left: 0;
    top: 75%;
  }

  .circle2 {
    right: 0;
    top: 120%;
  }

  .hexagon3 {
    left: 0;
    top: 150%;
  }
`

const bgImages = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/)
)

class ScrollingShapes extends Component {
  constructor(props) {
    super(props)
    //this.supported = React.createRef()
    this.hexagon1 = React.createRef()
    this.hexagon2 = React.createRef()
    this.hexagon3 = React.createRef()
    this.circle1 = React.createRef()
    this.circle2 = React.createRef()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    // let bodyHeight = document.body.clientHeight
    // let supported = this.supported.current
    // let supportedHeight = supported.offsetHeight
    // let roadmap = document.querySelector('.roadmap')
    // let roadMapHeight = supported.offsetHeight
    // let supportedTop = supported.offsetTop - bodyHeight
    // let roadMapOffsetBottom = roadmap.offsetTop + roadMapHeight
    //console.log(this.props.startDomNode)
    if (!this.props.startDomNode) {
      return
    }
    let pageYOffset = window.pageYOffset
    let bodyHeight = document.body.clientHeight
    let startDomNode = this.props.startDomNode
    //console.log(startDomNode)
    let startDomNodeHeight = startDomNode.offsetHeight

    let endDomNode = document.querySelector('.roadmap')
    let endDomNodeHeight = endDomNode.offsetHeight
    let startDomNodeTop = startDomNode.offsetTop - bodyHeight
    let endDomNodeOffsetBottom = endDomNode.offsetTop + endDomNodeHeight

    let scrollRange1 = [startDomNodeTop, endDomNodeOffsetBottom]
    let scrollRange2 = [
      startDomNodeTop + startDomNodeHeight / 2,
      endDomNodeOffsetBottom,
    ]

    console.log(startDomNode)

    // const hexagon1Pos = modulate(
    //   pageYOffset,
    //   scrollRange1,
    //   [-200, startDomNodeHeight / 2],
    //   true
    // )

    // const hexagon2Pos = modulate(pageYOffset, scrollRange2, [80, 40], true)

    // const circle1pos = modulate(pageYOffset, scrollRange2, [75, 100], true)

    // const circle2pos = modulate(pageYOffset, scrollRange1, [100, 140], true)

    // const hexagon3Pos = modulate(pageYOffset, scrollRange1, [150, 120], true)

    const hexagon1Pos = modulate(
      pageYOffset,
      scrollRange1,
      [-200, startDomNodeHeight],
      true
    )

    const hexagon2Pos = modulate(pageYOffset, scrollRange2, [100, 40], true)

    const circle1pos = modulate(pageYOffset, scrollRange2, [75, 150], true)

    const circle2pos = modulate(pageYOffset, scrollRange1, [100, 200], true)

    const hexagon3Pos = modulate(pageYOffset, scrollRange1, [300, 200], true)

    console.log(this.hexagon1Pos)

    this.hexagon1.current.style.top = hexagon1Pos + 'px'
    this.hexagon2.current.style.top = hexagon2Pos + '%'
    this.circle1.current.style.top = circle1pos + '%'
    this.circle2.current.style.top = circle2pos + '%'
    this.hexagon3.current.style.top = hexagon3Pos + '%'
  }
  render() {
    return (
      <ScrollingShapesContainer>
        <div className="bg-images">
          {bgImages.map(img => (
            <img
              key={img.name}
              className={img.name}
              src={img.src}
              ref={this[img.name]}
            />
          ))}
        </div>
      </ScrollingShapesContainer>
    )
  }
}

export default ScrollingShapes
