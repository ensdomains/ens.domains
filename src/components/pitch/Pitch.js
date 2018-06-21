import React from 'react'
import styled from 'react-emotion'
import NameAnimation from './NameAnimation'
import secure from '../../assets/secure.svg'
import hexagonBG from '../../assets/hexagonBG.png'
import distributed from '../../assets/distributed.svg'
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
  
  width: 90%;
  margin: 100px auto 0;

  .value-prop {
    position: relative;
    padding: 100px 0;
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
      font-size: 34px;
    `)};

    &:before {
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
