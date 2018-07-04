import React from 'react'
import styled from 'react-emotion'
import people from './people.svg'
import mq from '../../mediaQuery'

const RoadMapContainer = styled('section')`
  position: relative;
  overflow: hidden;

  .roadmap-container {
    margin-bottom: 100px;
    ${mq.medium`
      margin-bottom: 170px;
    `};
  }

  h3 {
    margin-bottom: 50px;
    ${mq.small`
      margin-bottom: 100px;
    `};

    img {
      margin-right: 5px;
    }
    text-align: center;
  }

  .bg {
    position: absolute;
  }

  .small-blue-hexagon {
    top: -200px;
    right: 0;
  }

  .blue-hexagon {
    bottom: 0;
    left: 0;
  }

  .cyan-circle {
    bottom: 0;
    right: 0;
  }

  .cyan-hexagon {
    left: 0;
    top: 0;
  }

  .rootkey-holders-title {
    margin-top: 50px;

    ${mq.medium`
      margin-top: 100px;
    `};
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-family: Karma;
    font-weight: 100;
    margin-bottom: 50px;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      ${mq.small`
        margin-bottom: 50px;
        width: 50%;
      `};
    }

    dt {
      font-weight: 100;
      font-size: 22px;
      margin-bottom: 10px;
      ${mq.medium`
        font-size: 34px;
      `};
    }

    dd {
      font-weight: 100;
      font-size: 18px;
      margin-bottom: 0;
      ${mq.medium`
        font-size: 22px;
      `};
    }
  }
`

class RoadMap extends React.Component {
  render() {
    return (
      <RoadMapContainer innerRef={this.roadmap} className="roadmap">
        <div className="container-small roadmap-container">
          <h2>ENS Roadmap.</h2>
          <p className="lede">
            ENS launched on mainnet on May 4, 2017. At launch, ENS features an
            automated registrar that allows anyone to register names ending in
            ".eth" using an auction process.
          </p>
          <p>
            This registrar is designed to be an interim step in ENS's long term
            development, to enable a fair and straightforward process in ENS's
            initial formation, and to provide an opportunity for the community
            to develop experience and insight into the operation of a
            decentralised name registry.
          </p>
          <p>
            The goal is to replace this interim registrar with a permanent one,
            which has a target date of two years after launch of this initial
            registrar. The intervening period will give the community an
            opportunity to observe the interim registrar in operation, and to
            submit proposals for a permanent registrar via the EIP (Ethereum
            Improvement Proposal) standardisation process. The accepted proposal
            will be implemented and deployed to replace the interim registrar.
            We expect the proposal to provide a fair process for transferring
            names registered with the initial registrar to the permanent
            registrar.
          </p>
        </div>
        <div className="managing-root">
          <div className="container-small">
            <h2>Managing the ENS Root.</h2>
            <p>
              To facilitate the possibility of upgrades and maintenance, and in
              exceptional circumstances to handle problems with ENS, the ENS
              root will initially be owned by a multisig, with members of the
              Ethereum dev community as keyholders. In the long term, we would
              like to see the root multisig replaced by some form of distributed
              decision making process, but developing such a process will
              require time, thought, and care, which we anticipate will be a
              longer term effort than the development of the permanent .eth
              registrar.
            </p>
            <h3 className="rootkey-holders-title">
              <img src={people} />Root Key Holders
            </h3>
            <dl>
              <div>
                <dt>Aron Fischer</dt>
                <dd>Colony &amp; Swarm</dd>
              </div>
              <div>
                <dt>Dan Finlay</dt>
                <dd>Metamask</dd>
              </div>
              <div>
                <dt>Nick Johnson</dt>
                <dd>Ethereum Name Service</dd>
              </div>
              <div>
                <dt>Jarrod Hope</dt>
                <dd>Status.im</dd>
              </div>
              <div>
                <dt>Piper Merriam</dt>
                <dd>Ethereum Foundation</dd>
              </div>
              <div>
                <dt>Taylor Monahan</dt>
                <dd>MyCrypto</dd>
              </div>
              <div>
                <dt>Vlad Zamfir</dt>
                <dd>Ethereum Foundation</dd>
              </div>
            </dl>
          </div>
        </div>
      </RoadMapContainer>
    )
  }
}

export default RoadMap
