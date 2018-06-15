import React from 'react'
import styled from 'react-emotion'

const Supported = styled('section')`
  padding-top: 170px;
  background-image: linear-gradient(
    -179deg,
    rgba(138, 244, 255, 0.1) 0%,
    rgba(21, 94, 240, 0.1) 100%
  );
  h2 {
    margin-bottom: 100px;
  }
  .apps {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 80%;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 60px;
  }

  .app {
    text-align: center;
    img {
      margin-bottom: 15px;
    }
    p {
      text-transform: capitalize;
    }
  }
`

const importAll = r =>
  r.keys().map(item => {
    let parsed = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(/([A-Z])/g, ' $1')
      .replace('./', '')
    return {
      name: parsed,
      src: r(item),
    }
  })

const mobile = importAll(
  require.context('./mobile', false, /\.(png|jpe?g|svg)$/)
)
const desktop = importAll(
  require.context('./desktop', false, /\.(png|jpe?g|svg)$/)
)
const apps = importAll(require.context('./apps', false, /\.(png|jpe?g|svg)$/))

const AppRow = ({ list, className, title }) => {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <div className={`${className} apps`}>
        {list.map(item => (
          <App key={item.name} src={item.src} name={item.name} />
        ))}
      </div>
    </React.Fragment>
  )
}

const App = ({ src, name }) => (
  <div className="app">
    <img src={src} />
    <p>{name}</p>
  </div>
)

export default () => (
  <Supported>
    <div className="container">
      <h2>Apps Supporting ENS</h2>
      <AppRow list={mobile} title="· Mobile Wallets ·" />
      <AppRow list={desktop} title="· Desktop Wallets ·" />
      <AppRow list={apps} title="· Apps ·" />
    </div>
  </Supported>
)
