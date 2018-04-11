import React, { Component } from 'react';
import './App.css';
import QuoteInfo from './Components/QuoteInfo/QuoteInfo';
import Buttons from './Components/Buttons/Buttons';

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '...loading...',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    // CORS proxy is used to make request from localhost
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const quoteUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json=?';

    fetch(proxyUrl + quoteUrl)
    .then(response => response.text())
    .then(data => {
      // pull quote and author from data
      let author = data.slice(data.indexOf("<quoteAuthor>") + 13, data.indexOf("</quoteAuthor"));
      let quote = data.slice(data.indexOf("<quoteText>") + 11, data.indexOf("</quoteText"));
      this.setState({quote: quote});
      this.setState({author: author === '' ? '- unknown' : '- ' + author});
    })
    .catch(err => console.log(err));
  }

  tweet = () => {
    var tweetQuote = this.state.quote + ' ' + this.state.author;
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
  }

  render() {
    return (
      <div className='app-container'>
        <QuoteInfo
          quote={this.state.quote}
          author={this.state.author}
        />
        <Buttons
          getQuote={this.getQuote}
          tweet={this.tweet}
        />
      </div>
    );
  }
}

export default QuoteGenerator;
