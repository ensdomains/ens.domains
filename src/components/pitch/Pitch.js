import React from 'react'
import styled from 'react-emotion'
import NameAnimation from './NameAnimation'
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
  width: 90%;
  margin: 100px auto 0;

  .value-prop {
    margin-top: 20px;
    font-size: 36px;
    font-weight: 100;
    line-height: 1.15em;
    text-align: center;
    width: 100%;
    strong {
      font-weight: bold;
    }
  }

  .card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .value-prop-card {
    width: 45%;
    p {
      font-weight: 300;
    }
  }
`

export default () => (
  <PitchContainer>
    <p className="value-prop">
      ENS offers a secure &amp; decentralised way to address resources both on
      and off the blockchain using simple,{' '}
      <strong>human-readable names.</strong>
    </p>
    <NameAnimation />
    <div className="card-container container">
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
    </div>
  </PitchContainer>
)
