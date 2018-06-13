import React from 'react'
import styled from 'react-emotion'

const QuoteContainer = styled('div')`
  background: linear-gradient(, rgba())
  opacity: 0.1;
  background-image: linear-gradient(8deg, rgba(51, 76, 232, 0.1) 0%, rgba(144, 239, 255, 0.1) 100%);
  padding: 100px 0;
  color: #3252C8;
  text-align: center;
  blockquote {
    font-size: 52px;
    line-height: 1.1em;
    font-weight: 100;
  }
  cite {
    font-family: Karma;
    font-weight: 300;
    font-style: normal;
    font-size: 32px;
  }
  
`

const Quote = ({ quote, author }) => (
  <QuoteContainer>
    <div className="container">
      <blockquote>{quote}</blockquote>
      <cite>— {author}</cite>
    </div>
  </QuoteContainer>
)

export default Quote
