import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogRocket from 'logrocket';
import './index.css';
import setupLogRocketReact from 'logrocket-react';




LogRocket.init('o0czbg/chemaxe');

setupLogRocketReact(LogRocket);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
