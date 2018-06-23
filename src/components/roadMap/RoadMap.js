import React from 'react'
import styled from 'react-emotion'
import { modulate } from '../../utils'

const RoadMapContainer = styled('section')`
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  .container-small:first-child {
    margin-bottom: 100px;
  }

  h3 {
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
`

class RoadMap extends React.Component {
  render() {
    return (
      <RoadMapContainer innerRef={this.roadmap} className="roadmap">
        <div className="container-small">
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
        <div className="container-small">
          <h2>Managing the ENS Root.</h2>
          <p>
            To facilitate the possibility of upgrades and maintenance, and in
            exceptional circumstances to handle problems with ENS, the ENS root
            will initially be owned by a multisig, with members of the Ethereum
            dev community as keyholders. In the long term, we would like to see
            the root multisig replaced by some form of distributed decision
            making process, but developing such a process will require time,
            thought, and care, which we anticipate will be a longer term effort
            than the development of the permanent .eth registrar.
          </p>
          <h3>· Root Key Holders ·</h3>
          <ul>
            <li>Dan Findley</li>
            <li>Jarrod Hope</li>
          </ul>
        </div>
      </RoadMapContainer>
    )
  }
}

export default RoadMap
