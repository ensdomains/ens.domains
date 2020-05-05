import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'
import Team from '../components/team/Team'
import CallToAction from '../components/callToAction/CallToAction'
import Header from '../components/headers/AnimatedHeader'
import Footer from '../components/footer/Footer'
import RoadMap from '../components/roadMap/RoadMap'
import styled from 'react-emotion'
import warning from '../assets/warning.svg'

const Announcement = styled('div')`
  display: flex;
  color: #f5a623;
  justify-content: center;
  background: #5284ff;
  border-bottom: #5284ff solid 3px;
  div{
    padding: 1em;
  }
  h3 {
    font-weight: 400;
    text-align: center;
    padding: 0 20px;
  }
  a {
    color: #f5a623;
    text-decoration: underline;
  }
`

const IndexPage = () => (
  <Fragment>
    <Header />
    <Announcement>
      <div>
        <img src={warning}></img>&nbsp;
        Names bought in May are expiring soon. &nbsp;
        <a href="https://app.ens.domains">(Go to ENS manager)</a>
      </div>
    </Announcement>
    <Pitch />
    <Quote
      quote="Mathematics is the art of giving the same name to different things."
      author="— Henri Poincare"
    />
    <GetStarted />
    <Supported />
    <Team />
    <RoadMap />
    <CallToAction
      href="https://gitter.im/ethereum/go-ethereum/name-registry"
      linkText="Join Now"
    >
      <h2>Get involved.</h2>
      <p>
        For more information about ENS, or to help us develop and expand it,
        join our Gitter channel.
      </p>
    </CallToAction>
    <Footer />
  </Fragment>
)

export default IndexPage
