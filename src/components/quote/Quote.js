import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import quoteBG from '../../assets/quoteBG.jpg'

const QuoteContainer = styled('div')`
  background-image: url(${quoteBG});
  padding: 80px 0;
  margin-bottom: 80px;
  color: #3252c8;
  text-align: center;
  ${mq.medium(`
    padding: 175px 0;
    margin-bottom: 170px
  `)};
  blockquote {
    font-size: 32px;
    line-height: 1.2em;
    font-weight: 100;

    ${mq.medium(`
      font-size: 48px
    `)};
  }
  cite {
    font-family: Karma;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    ${mq.medium(`
      font-size: 28px
    `)};
  }
`

const Quote = ({ quote, author }) => (
  <QuoteContainer>
    <div className="container">
      <blockquote>{quote}</blockquote>
      <cite>{author}</cite>
    </div>
  </QuoteContainer>
)

export default Quote
