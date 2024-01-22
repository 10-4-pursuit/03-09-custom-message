import React from 'react';
import CustomMessage from './CustomMessage';

const App = () => {
  const customMessage = "Hello, hows it going!";
  
  return (
    <div>
      <h1>Custom Message</h1>
      <CustomMessage message={customMessage} />
    </div>
  );
};

export default App;
