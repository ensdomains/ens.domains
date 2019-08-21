import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'
import Team from '../components/team/Team'
import RoadMap from '../components/roadMap/RoadMap'
import CallToAction from '../components/callToAction/CallToAction'
import Header from '../components/headers/AnimatedHeader'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <Fragment>
    <Header />
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
