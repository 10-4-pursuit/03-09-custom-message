import React from "react";

function CustomMessage({ welcome, message, user }) {
    return (
        <div>
            <h1>{welcome}</h1>
            <h2>{user}</h2>
            <p>{message}</p>
        </div>
    );
};

export default CustomMessage;