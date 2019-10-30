import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

//componente encapsula html, css, e js
const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );


export default App;
