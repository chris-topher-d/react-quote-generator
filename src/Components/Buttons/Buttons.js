import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='buttons'>
        <button className='submit' onClick={this.props.getQuote}>Get Quote</button>
        <button className='tweet' onClick={this.props.tweet}><i className="fab fa-twitter"></i></button>
      </div>
    );
  }
}

export default Buttons;
