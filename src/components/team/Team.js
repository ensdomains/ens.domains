import React, { Component } from 'react'
import styled from 'react-emotion'
import { importAll } from '../../utils'
import mq from '../../mediaQuery'
import hoverCircle from './hovers/Hover_Circle_168x168.svg'
import hoverHex from './hovers/Hover_Hex_155x179.svg'
import teamData from './team.json'
const TeamIntro = styled.div`
  max-width: 660px;
  margin: 0 auto 0;
  padding: 0 30px;
  text-align: center;
`

const TeamContainer = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 80px;
  grid-template-areas:
    'nick becca'
    'jeff makoto'
    'dean brantly'
    'jim';

  ${mq.small`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 80px;
    grid-template-areas:
    'nick becca jeff'
    'makoto dean brantly'
    'jim . .';
  `};

  .jeff {
    grid-area: jeff;
  }

  .jim {
    grid-area: jim;
  }

  .nick {
    grid-area: nick;
  }

  .makoto {
    grid-area: makoto;
  }

  .dean {
    grid-area: dean;
  }

  .becca {
    grid-area: becca;
  }

  .brantly {
    grid-area: brantly;
  }

  .member {
    text-decoration: none;
    display: block;
    text-align: center;
    &:visited {
      color: #2b2b2b;
    }
    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 180px;
      width: 100%;
      margin-bottom: 0;
      position: relative;
      ${mq.xs`
        height: 300px;
      `};
      ${mq.small`
        height: 180px;
      `};

      ${mq.medium`
        height: 240px;
      `};
    }
    img {
      max-width: 100%;
      position: relative;
    }

    img.hover {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 100%;
      transition: 0.2s;
      z-index: -1;
      opacity: 0;
    }

    &:hover .hover {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 1;
    }

    h3 {
      color: #3252c8;
      font-family: Karma;
      font-size: 20px;
      margin-bottom: 5px;
      ${mq.medium`
        font-size: 24px;
      `};
    }
    p {
      font-size: 14px;
      font-family: Karma;
      font-weight: 100;
      margin-bottom: 0;
      ${mq.medium`
        font-size: 16px;
      `};
    }
    .details {
    }
  }
`

const team = importAll(
  require.context('./images', false, /\.(png|jpe?g|svg)$/),
  teamData
)

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <TeamIntro>
          <h2>Meet the team</h2>
          <p>
            We’ve hired a number of talented individuals. Many of them have
            contributed previously to ENS in a voluntary capacity.
          </p>
        </TeamIntro>
        <TeamContainer className="container-small team">
          {team.map((member, i) => (
            <a
              className={`member ${member.name} ${member.type}`}
              href={member.link}
              key={i}
            >
              <div className="img-wrapper">
                <img src={member.src} />
                <img
                  className="hover"
                  src={member.type === 'hexagon' ? hoverHex : hoverCircle}
                />
              </div>
              <div className="details">
                <h3>{member.fullName}</h3>
                <p>{member.title}</p>
              </div>
            </a>
          ))}
        </TeamContainer>
      </React.Fragment>
    )
  }
}

export default Team
