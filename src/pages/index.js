import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'
import RoadMap from '../components/roadMap/RoadMap'
import GetInvolved from '../components/getInvolved/GetInvolved'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <Fragment>
    <Pitch />
    <Quote
      quote="Mathematics is the art of giving the same name to different things."
      author="Henri Poincare"
    />
    <GetStarted />
    <Supported />
    <RoadMap />
    <GetInvolved />
    <Footer />
  </Fragment>
)

export default IndexPage
