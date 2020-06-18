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
                <dd>Colony</dd>
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
                <dt>Jarrad Hope</dt>
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
                <dt>Sergey Nazarov</dt>
                <dd>Chainlink</dd>
              </div>
            </dl>
          </div>
        </div>
      </RoadMapContainer>
    )
  }
}

export default RoadMap
