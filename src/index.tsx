import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInSide from './SignInSide'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignInSide></SignInSide>
  </React.StrictMode>,
  document.getElementById('root')
);
