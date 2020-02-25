import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import { modulate, importAll } from '../../utils'
import walletIcon from './icons/wallet.png'
import appsIcon from './icons/apps.png'
import links from './links.json'
import GridView, { Row } from '../gridView/GridView'
import ScrollingShapes from '../scrollingShapes/ScrollingShapes'

const Supported = styled.section`
  position: relative;
`

const mobile = importAll(
  require.context('./mobile', false, /\.(png|jpe?g|svg)$/)
)
const desktop = importAll(
  require.context('./desktop', false, /\.(png|jpe?g|svg)$/)
)
const apps = importAll(require.context('./apps', false, /\.(png|jpe?g|svg)$/))

export default class SupportedContainer extends React.Component {
  state = {
    supported: null,
  }
  componentDidMount() {
    this.roadmap = document.querySelector('.roadmap')
    this.setState({
      supported: this.supported,
    })
  }
  render() {
    return (
      <Supported innerRef={el => (this.supported = el)}>
        <GridView>
          <h2>Apps Supporting ENS</h2>
          <Row list={mobile} title="s" links={links}>
            <h3>
              <img className="wallet-icon" src={walletIcon} />Wallets
            </h3>
          </Row>
          <Row list={apps} links={links}>
            <h3>
              <img className="apps-icon" src={appsIcon} />Apps
            </h3>
          </Row>
        </GridView>
        <ScrollingShapes
          startDomNode={this.state.supported}
          endDomNode={this.roadmap}
        />
      </Supported>
    )
  }
}
