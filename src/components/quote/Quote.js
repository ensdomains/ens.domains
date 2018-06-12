import React from 'react'

const Quote = ({ quote, author }) => (
  <div className="quote">
    <blockquote>{quote}</blockquote>
    <cite>{author}</cite>
  </div>
)

export default Quote
