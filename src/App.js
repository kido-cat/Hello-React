import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './companents/todos.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todos list</h1>
        <Todos />
      </header>
    </div>
  );
}

export default App;
