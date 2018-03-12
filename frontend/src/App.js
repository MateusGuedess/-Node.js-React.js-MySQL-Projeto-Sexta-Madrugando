import React, { Component } from 'react';
import './App.css';

import CadastroEvento from './components/eventos/cadastroEventos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CadastroEvento />
      </div>
    );
  }
}

export default App;
