import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'

import docs from './documentation.svg'
import manage from './manage.svg'
import register from './register.svg'
import wallet from './wallet.svg'

const GetStarted = styled('section')`
  padding: 100px 0;

  .icons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .icon {
    width: 40%;

    ${mq.medium`
      width: 20%;
    `};
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    img {
      max-width: 80%;
      ${mq.medium`
        max-width: 100%;
      `};
    }
  }

  p {
    text-align: center;
  }
`

export default () => (
  <GetStarted>
    <h2>Get Started using ENS</h2>
    <div className="icons container">
      <div className="icon">
        <div className="img-wrapper">
          <img src={wallet} />
        </div>
        <p>Name your wallet instantly</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <img src={register} />
        </div>
        <p>Register a .eth domain</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <img src={manage} />
        </div>
        <p>Manage your domains</p>
      </div>
      <div className="icon">
        <div className="img-wrapper">
          <img src={docs} />
        </div>
        <p>Read the documentation</p>
      </div>
    </div>
  </GetStarted>
)
