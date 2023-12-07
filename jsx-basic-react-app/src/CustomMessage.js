import React from "react";
const CustomMessage = (props) => {
  return (
    <div>
      <h1>Custom Message</h1>
      <p>{props.message}</p>
   </div>   
  );
};

export default CustomMessage;
