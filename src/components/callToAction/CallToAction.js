import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import BG from '../../assets/heroBG.jpg'

const CallToActionContainer = styled('section')`
  background: url(${BG});
  background-size: cover;
  background-position: center center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-weight: 200;
  }

  p {
    font-size: 22px;
    font-weight: 200;
    line-height: 1.3em;
    max-width: 768px;
    text-align: center;

    ${mq.medium`
      font-size: 30px;
    `};
  }
`

class CallToAction extends React.Component {
  render() {
    return (
      <CallToActionContainer>
        <div className="container">
          {this.props.children}
          <a href={this.props.href} className="button">
            {this.props.linkText
              ? this.props.linkText
              : 'Please add linkText and an href prop to CallToAction'}
          </a>
        </div>
      </CallToActionContainer>
    )
  }
}

export default CallToAction
