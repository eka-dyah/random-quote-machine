import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteBox from './QuoteBox';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <QuoteBox />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
