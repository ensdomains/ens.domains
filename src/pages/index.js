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
import styled from 'react-emotion'
import mq from '../mediaQuery'

const Link = styled('a')`
color: rgba(255, 255, 255, 0.75);
`
const Explanation = styled('div')`
  display: none;
  font-size: 20px;
  background: #ffffff;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
  border-radius: 20px;
  font-weight: 300;
  line-height: 1.4em;
  text-align: center;
  position: relative;
  padding: 70px;
  max-width: 50%;
  margin: 0 auto 100px;
  ${mq.medium`
    display: block
  `};
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }
`

const ReserveNow = styled('a')`
  border: 2px solid #5284FF;
  border-radius: 90.72px;
  color: #5284FF;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 40px;
  text-align: center;
`

const IndexPage = () => (
  <Fragment>
    <Header />
    <Pitch />
    <Explanation>
      <h2>What's new?</h2>
      <p>
      The 3–6 character .Eth name reservation process has started.
      For more information about the process, read our <Link href='https://medium.com/the-ethereum-name-service/announcing-the-ens-3-6-character-eth-name-reservation-process-7f3cc4d13f65'>blog post</Link>
      </p>
      <ReserveNow href="https://reserve.ens.domains">Reserve Now</ReserveNow>
    </Explanation>
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
