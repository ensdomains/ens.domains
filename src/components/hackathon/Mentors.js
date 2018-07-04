import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridView, { Row } from '../gridView/GridView'
import { importAll } from '../../utils'

const mentorDetails = {
  nicksdjohnson: {
    fullName: 'Nick Johnson',
    org: 'ENS',
    skillsets: '#ama',
  },
  jarradhope: {
    fullName: 'Jarrad Hope',
    org: 'status.im',
    skillsets: '#mobile',
  },
  jennaszenk: {
    fullName: 'Jenna Zenk',
    org: 'Melonport',
    skillsets: '#web3 #governance',
  },
  brettsun: {
    fullName: 'Brett Sun',
    org: 'Aragon',
    skillsets: '#ens #governance',
  },
  quynhtranthanh: {
    fullName: 'Quynh Tran',
    org: 'Crypto Compare',
    skillsets: '#data',
  },
  matthewgould: {
    fullName: 'Matthew Gould',
    org: 'BuyethDomains',
    skillsets: '#ens',
  },
  graemeblackwood: {
    fullName: 'Graeme Blackwood',
    org: 'Argent',
    skillsets: '#ux',
  },
  martriay: {
    fullName: 'Martín Triay',
    org: 'Zeppelin',
    skillsets: '#security',
  },
  erictu: {
    fullName: 'Eric Tu',
    org: 'Infura',
    skillsets: '#infrastructure #backend',
  },
  bradenpezeshki: {
    fullName: 'Braden Pezeshki',
    org: 'Browseth',
    skillsets: '#ens',
  },
  deaneigenmann: {
    fullName: 'Dean Eigenmann',
    org: 'ENS',
    skillsets: '#ens #governance',
  },
  jefflau: {
    fullName: 'Jeff Lau',
    org: 'ENS',
    skillsets: '#ens #js',
  },
  beltran: {
    fullName: 'Beltran Berrocal',
    org: 'ENS',
    skillsets: '#ens #ux',
  },
}

const importMentors = r =>
  r.keys().map(item => {
    let fileName = item.replace(/\.(png|jpe?g|svg)$/, '').replace('./', '')
    let parsed = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(/([A-Z])/g, ' $1')
      .replace('./', '')

    let obj = {
      fileName: fileName,
      name: parsed,
      src: r(item),
    }
    return { ...obj, ...mentorDetails[parsed] }
  })

const mentors = importMentors(
  require.context('./mentors', false, /\.(png|jpe?g|svg)$/)
)

const links = {
  aragon: '',
  infura: '',
  status: '',
}

class Mentors extends Component {
  render() {
    return (
      <GridView>
        <Row list={mentors} title="s" links={links}>
          <h3>Mentors</h3>
        </Row>
      </GridView>
    )
  }
}

export default Mentors
