import React, { Component } from 'react'
import styled from 'react-emotion'
import { importAll } from '../../utils'
import mq from '../../mediaQuery'
import hoverCircle from './hovers/Hover_Circle_168x168.svg'
import hoverHex from './hovers/Hover_Hex_155x179.svg'
import teamData from './team.json'

const TeamContainer = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 80px;
  grid-template-areas:
    'nick virgil'
    'chris makoto'
    'dean leonard'
    'jeff becca'
    'beltran .';

  ${mq.small`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 80px;
    grid-template-areas:
    'nick virgil chris'
    'makoto dean leonard'
    'jeff becca beltran';
  `};

  .jeff {
    grid-area: jeff;
  }

  .nick {
    grid-area: nick;
  }

  .virgil {
    grid-area: virgil;
  }

  .chris {
    grid-area: chris;
  }

  .makoto {
    grid-area: makoto;
  }

  .dean {
    grid-area: dean;
  }

  .leonard {
    grid-area: leonard;
  }

  .becca {
    grid-area: becca;
  }

  .beltran {
    grid-area: beltran;
  }

  .member {
    text-decoration: none;
    display: block;
    &:visited {
      color: #2b2b2b;
    }
    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
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
      <TeamContainer className="container-small">
        {team.map((member, i) => (
          <a
            className={`member ${member.name} ${member.type}`}
            href={member.link}
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
    )
  }
}

export default Team
