import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridView, { Row } from '../gridView/GridView'
import { importAll } from '../../utils'

const sponsors = importAll(
  require.context('./sponsors', false, /\.(png|jpe?g|svg)$/)
)

const links = {
  aragon: '',
  infura: '',
  status: '',
}

class Sponsors extends Component {
  render() {
    return (
      <GridView>
        <Row list={sponsors} title="s" links={links}>
          <h3>Sponsors</h3>
        </Row>
      </GridView>
    )
  }
}

export default Sponsors
