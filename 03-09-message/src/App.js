import React from 'react';
import CustomMessage from './CustomMessage';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <CustomMessage message="Hello, this is a custom message! What else should I write...?" />
    </div>
  );
};

export default App;