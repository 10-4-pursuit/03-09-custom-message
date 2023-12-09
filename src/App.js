import React from 'react';
import CustomMessage from './CustomMessage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <CustomMessage message="Hello"/>
      <CustomMessage message="Goobye"/>
      <CustomMessage message="Message"/>
    </div>
  );
}

export default App;
