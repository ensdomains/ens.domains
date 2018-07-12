import React, { Component } from 'react'
import styled from 'react-emotion'
import GridView from '../gridView/GridView'
import mentorLinks from './links.json'

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
  aliazam: {
    fullName: 'Ali Azam',
    org: "ZINC",
    skillsets: '#solidity #consensus',
  },
  will_harborne: {
    fullName: 'Will Harborne',
    org: 'Ethfinex',
    skillsets: '#solidity #payment',
  }
}

const MentorRow = ({ list, className, children }) => {
  return (
    <React.Fragment>
      {children}
      <div className={`row ${className ? className : ''}`}>
        {list.map(item => (
          <Mentor
            key={item.name}
            src={item.src}
            name={item.fullName}
            org={item.org}
            skillsets={item.skillsets}
            fileName={item.fileName}
          />
        ))}
      </div>
    </React.Fragment>
  )
}

const MentorContainer = styled.span`
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }

  span {
    font-size: 16px;
  }
`

const Mentor = ({ src, name, fileName, org, skillsets }) => (
  <MentorContainer className="grid-item">
    <a href={mentorLinks[fileName]}>
      <img src={src} />
      <p>{name}</p>
    </a>
    <span>
      {org}
      <br />
      {skillsets}
    </span>
  </MentorContainer>
)

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
        <MentorRow list={mentors} title="s" links={links}>
          <h3>Mentors</h3>
        </MentorRow>
      </GridView>
    )
  }
}

export default Mentors
