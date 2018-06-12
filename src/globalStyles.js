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
    font-weight: 300;
  }

  #___gatsby {
    height: 100%
  }

  #___gatsby > div {
    height: 100%
  }
`
