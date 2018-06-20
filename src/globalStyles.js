import { injectGlobal } from 'emotion'
import mq from './mediaQuery'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    color: #2B2B2B;
    height: 100%;
    font-family: Overpass;
    font-weight: 300;

    font-size: 18px;

    ${mq.medium(`
      font-size: 20px;
    `)}
  }

  p {
    font-size: 18px;
    line-height: 1.5em;

    ${mq.medium(`
      font-size: 20px;
    `)}
  }

  p.lede {
    font-family: Karma;
    font-weight: 100;
    font-size: 24px;
    line-height: 1.3em;

    ${mq.medium(`
      font-size: 34px;
    `)}
  }

  blockquote {
    font-family: Karma;
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 20px 0;
  }

  .container-small {
    margin: 0 auto;
    max-width: 768px;
    padding: 0 20px 0;
  }

  #___gatsby {
    height: 100%
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
    ${mq.medium(`
      font-size: 34px;
    `)}
    
  }

  h3 {
    font-size: 22px;
    font-weight: 500;

    ${mq.medium(`
      font-size: 30px;
    `)}
    
  }

  button {
    background: transparent;
    border-radius: 25px;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 14px;
    border: 2px solid white;
    padding: 10px 40px;

    &:hover {
      cursor: pointer;
    }
  }

`
