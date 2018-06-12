import React from 'react'
import styled from 'react-emotion'
import StaggerEntrance from './StaggerEntrance'
import secure from '../../assets/secure.svg'
import distributed from '../../assets/distributed.svg'

class ValueCard extends React.Component {
  render() {
    return (
      <div className="value-prop-card">
        <img src={this.props.img} />
        <h2>{this.props.title}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

const PitchContainer = styled.div`
  width: 500px;
  margin: 0 auto 0;
`

export default () => (
  <PitchContainer>
    <p className="value-prop">
      ENS offers a secure &amp; decentralised way to address resources both on
      and off the blockchain using simple, human-readable names.
    </p>
    <StaggerEntrance>jack.mywallet.eth</StaggerEntrance>
    <StaggerEntrance>0x10abc565ef57aebf13e5eafc02fa864f8a1f5be</StaggerEntrance>
    <ValueCard title="Secure." img={secure}>
      ENS operates in a distributed fashion for both its infrastructure and
      governance. Anyone can register a .eth domain name for themselves by
      participating in an auction process, mediated by the blockchain.
    </ValueCard>
    <ValueCard title="Truly distributed." img={distributed}>
      ENS operates in a distributed fashion for both its infrastructure and
      governance. Anyone can register a .eth domain name for themselves by
      participating in an auction process, mediated by the blockchain.
    </ValueCard>
  </PitchContainer>
)
