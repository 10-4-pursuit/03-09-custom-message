import logo from './logo.svg';
import './App.css';
import React from 'react';
import CustomMessage from './CustomMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomMessage message="Hello World!" />
      </header>
    </div>
  );
}

export default App;
