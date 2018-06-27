import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'

import docs from './documentation.svg'
import manage from './manage.svg'
import register from './register.svg'
import wallet from './wallet.svg'

const GetStarted = styled('section')`
  padding: 100px 0 0;

  ${mq.medium`
    padding: 100px 0 0;
    `};

  .icons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .icon {
    display: block;
    text-decoration: none;
    padding: 20px 20px;
    background: #ffffff;
    box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
    border-radius: 20px;
    width: 45%;
    transition: 0.3s ease-in-out;
    margin-bottom: 4%;

    ${mq.medium`
      padding: 40px 20px;
      width: 23%;
    `};

    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;

      img {
        width: 80%;
      }
    }

    p {
      transition: 0.3s ease-in-out;
      font-size: 16px;
      color: #3252c8;
      text-align: center;
      margin-bottom: 0;
      ${mq.medium`
        font-size: 20px;
      `};
    }

    &:hover {
      transform: scale(1.04);
      box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.55);
      background: #121d46;
      p {
        color: white;
      }
    }
  }
`

export default () => (
  <GetStarted>
    <h2>Get Started using ENS</h2>
    <div className="icons container">
      <a href="https://now.ens.domains" className="icon">
        <div className="img-wrapper">
          <img src={wallet} />
        </div>
        <p>Name your wallet instantly</p>
      </a>
      <a href="https://registrar.ens.domains" className="icon">
        <div className="img-wrapper">
          <img src={register} />
        </div>
        <p>Register a .eth domain</p>
      </a>
      <a href="https://manager.ens.domains/" className="icon">
        <div className="img-wrapper">
          <img src={manage} />
        </div>
        <p>Manage your domains</p>
      </a>
      <a href="https://docs.ens.domains/" className="icon">
        <div className="img-wrapper">
          <img src={docs} />
        </div>
        <p>Read the documentation</p>
      </a>
    </div>
  </GetStarted>
)
