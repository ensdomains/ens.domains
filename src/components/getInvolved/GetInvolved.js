import React from 'react'
import styled from 'react-emotion'
import BG from '../../assets/heroBG.jpg'

const GetInvolvedContainer = styled('section')`
  background: url(${BG});
  background-size: cover;
  background-position: center center;
  height: 500px;
`

class GetInvolved extends React.Component {
  render() {
    return (
      <GetInvolvedContainer>
        <div className="container">
          <h2>Get involved.</h2>
          <p>
            For more information about ENS, or to help us develop and expand it,
            join our Gitter channel.
          </p>
          <button>Join Now</button>
        </div>
      </GetInvolvedContainer>
    )
  }
}

export default GetInvolved
