import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: Overpass;
    font-weight: 300;
  }

  p {
    font-size: 20px;
    line-height: 1.5em;
  }

  blockquote {
    font-family: Karma;
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
  }

  .container-small {
    margin: 0 auto;
    max-width: 768px;
  }

  #___gatsby {
    height: 100%
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 32px;
    font-weight: 500;
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
