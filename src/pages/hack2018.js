import React, { Fragment } from 'react'
import ValueProp from '../components/valueProp/ValueProp'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Sponsors from '../components/hackathon2018/Sponsors'
import Mentors from '../components/hackathon2018/Mentors'
import Partners from '../components/hackathon2018/Partners'
import CallToAction from '../components/callToAction/CallToAction'
import Header from '../components/headers/StickyHeader'
import Footer from '../components/footer/Footer'

const HackPage = () => (
  <Fragment>
    <Header />
    <ValueProp>
      <h2>ENS workshop &amp; Hackathon</h2>
      The second ENS workshop, on <strong>August 10th</strong>, will bring
      together experts from around the Ethereum community to discuss technical
      improvements and the way forward for the Ethereum Name Service. Topics
      will include dispute resolution, user experience, and design of the
      permanent registrar. This will be followed on{' '}
      <strong>August 11th-12th</strong> by a two day ENS focused hackathon
    </ValueProp>
    <Quote quote="11-12th August, 2018" author="Central London" />
    <Sponsors />
    <Mentors />
    <Partners />
    <CallToAction linkText="Registration is now closed" />
    <Footer />
  </Fragment>
)

export default HackPage
