import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppBackground from './components/background/background'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBackground />
    <App />
  </React.StrictMode>
);