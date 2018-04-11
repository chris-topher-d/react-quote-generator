import React from 'react';
import './QuoteInfo.css';

const QuoteInfo = ({quote, author}) => (
  <div className='quote-info'>
    <div className='quote'>
      <i className="fas fa-quote-left"></i>
        <p className='words'>{quote}</p>
      <i className="fas fa-quote-right"></i>
    </div>
    <p className='author'>{author}</p>
  </div>
);

export default QuoteInfo;
