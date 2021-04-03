import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AxiosConfigure from './repo/_axios';

AxiosConfigure();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
