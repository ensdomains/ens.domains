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
  }

  blockquote {
    font-family: Karma;
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  }

  #___gatsby {
    height: 100%
  }

`
