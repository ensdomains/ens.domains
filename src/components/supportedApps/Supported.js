import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import { modulate } from '../../utils'
import phoneIcon from './icons/phone.png'
import desktopIcon from './icons/desktop.png'
import appsIcon from './icons/apps.png'
import links from './links.json'

console.log(links)

const Supported = styled('section')`
  position: relative;
  padding: 100px 0 0;

  ${mq.medium`
    padding: 170px 0;
  `};

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
    transform: translateX(-50%)
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

  h2 {
    margin-bottom: 50px;

    ${mq.medium`
      margin-bottom: 100px;
    `}
  }
  .apps {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 100%;
    flex-wrap: wrap;

    &:last-of-type {
      margin 0 auto 0;
    }

    ${mq.medium`
      width: 80%%;
    `};
  }

  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 60px;

    img {
      margin-right: 5px;
    }

    .phone-icon {
      width: 15px;
      height: 22px;
    }

    .desktop-icon {
      width: 29px;
      height: 22px;
    }

    .apps-icon {
      width: 22px;
      height: 23px;
    }
  }

  .app {
    text-align: center;
    text-decoration: none;
    width: 50%;
    ${mq.medium`
      width: 25%;
    `};
    
    img {
      transition: box-shadow 0.3s ease-in-out;
      border-radius: 50%;
      box-shadow: 4px 10px 20px 0 rgba(136,149,169,0.30);
      width: 50%;
      margin-bottom: 15px;
    }
    p {
      color: #3252C8;
      font-size: 16px;
      font-weight: 400;
      text-transform: capitalize;
      ${mq.medium`
        font-size: 20px;
      `};
    }

    &:hover {
      cursor: pointer;
      img {
        box-shadow: 4px 10px 20px 0 rgba(136,149,169,0.75);
      }
      
      p {
        transition: 0.2s ease-in-out;
        color: #5284FF;
      }
    }
  }
`

const importAll = r =>
  r.keys().map(item => {
    let fileName = item.replace(/\.(png|jpe?g|svg)$/, '').replace('./', '')
    let parsed = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(/([A-Z])/g, ' $1')
      .replace('./', '')
    return {
      fileName: fileName,
      name: parsed,
      src: r(item),
    }
  })

const mobile = importAll(
  require.context('./mobile', false, /\.(png|jpe?g|svg)$/)
)
const desktop = importAll(
  require.context('./desktop', false, /\.(png|jpe?g|svg)$/)
)
const apps = importAll(require.context('./apps', false, /\.(png|jpe?g|svg)$/))

const bgImages = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/)
)

const AppRow = ({ list, className, children }) => {
  return (
    <React.Fragment>
      {children}
      <div className={`apps ${className ? className : ''}`}>
        {list.map(item => (
          <App
            key={item.name}
            src={item.src}
            name={item.name}
            fileName={item.fileName}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

const App = ({ src, name, fileName }) => (
  <a className="app" href={links[fileName]}>
    <img src={src} />
    <p>{name}</p>
  </a>
)

export default class SuppportedContainer extends React.Component {
  constructor(props) {
    super(props)
    this.supported = React.createRef()
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
    let bodyHeight = document.body.clientHeight
    let supported = this.supported.current
    let supportedHeight = supported.offsetHeight
    let roadmap = document.querySelector('.roadmap')
    let roadMapHeight = supported.offsetHeight
    let supportedTop = supported.offsetTop - bodyHeight
    let roadMapOffsetBottom = roadmap.offsetTop + roadMapHeight

    let scrollRange1 = [supportedTop, roadMapOffsetBottom]
    let scrollRange2 = [supportedTop + supportedHeight / 2, roadMapOffsetBottom]

    const hexagon1Pos = modulate(
      window.pageYOffset,
      scrollRange1,
      [-200, supportedHeight / 2],
      true
    )

    const hexagon2Pos = modulate(
      window.pageYOffset,
      scrollRange2,
      [80, 40],
      true
    )

    const circle1pos = modulate(
      window.pageYOffset,
      scrollRange2,
      [75, 100],
      true
    )

    const circle2pos = modulate(
      window.pageYOffset,
      scrollRange1,
      [100, 140],
      true
    )

    const hexagon3Pos = modulate(
      window.pageYOffset,
      scrollRange1,
      [150, 120],
      true
    )

    this.hexagon1.current.style.top = hexagon1Pos + 'px'
    this.hexagon2.current.style.top = hexagon2Pos + '%'
    this.circle1.current.style.top = circle1pos + '%'
    this.circle2.current.style.top = circle2pos + '%'
    this.hexagon3.current.style.top = hexagon3Pos + '%'
  }

  render() {
    return (
      <Supported innerRef={this.supported}>
        <div className="container">
          <h2>Apps Supporting ENS</h2>
          <AppRow list={mobile} title="s">
            <h3>
              <img className="phone-icon" src={phoneIcon} />Mobile Wallet
            </h3>
          </AppRow>
          <AppRow list={desktop}>
            <h3>
              <img className="desktop-icon" src={desktopIcon} />Desktop Wallets
            </h3>
          </AppRow>
          <AppRow list={apps}>
            <h3>
              <img className="apps-icon" src={appsIcon} />Apps
            </h3>
          </AppRow>
        </div>
        <div className="bg-images">
          {bgImages.map(img => (
            <img className={img.name} src={img.src} ref={this[img.name]} />
          ))}
        </div>
      </Supported>
    )
  }
}
