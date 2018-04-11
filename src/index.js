import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteGenerator from './QuoteGenerator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuoteGenerator />, document.getElementById('root'));
registerServiceWorker();
