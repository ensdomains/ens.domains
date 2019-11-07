import React from 'react'
import styled from 'react-emotion'
import Explainer from './Explainer'
import secure from '../../assets/secure.svg'
import distributed from '../../assets/distributed.svg'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'
import ValueProp from '../valueProp/ValueProp'

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
  render() {
    return (
      <PitchContainer>
        <ValueProp>
          ENS offers a secure &amp; decentralised way to address resources both
          on and off the blockchain using simple,{' '}
          <strong>human-readable names.</strong>
        </ValueProp>

        <Explainer />
        <div className="card-container container">
          <ValueCard title="Secure." img={secure}>
            ENS is built on smart contracts on the Ethereum blockchain, meaning
            it doesn't suffer from the insecurity of the DNS system. You can be
            confident names you enter work the way their owner intended.
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
