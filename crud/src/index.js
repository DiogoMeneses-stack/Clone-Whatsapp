import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import Header from './components/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header texto = "Cabecalho" />
    <App texto = "App"/>
  </React.StrictMode>
);
