import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  ReactDOM.render(<App />, reactAppContainer);
}
