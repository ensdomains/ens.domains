import React from 'react'
import styled from 'react-emotion'
import Explainer from './Explainer'
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

export default () => (
  <PitchContainer>
    <p className="value-prop">
      ENS offers a secure &amp; decentralised way to address resources both on
      and off the blockchain using simple,{' '}
      <strong>human-readable names.</strong>
    </p>
    <Explainer />
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
