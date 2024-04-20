
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText]=useState("");
  const copyText=(e)=>{
    setText(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input type="text" onClick={copyText} />
          <p>Hello {text}!</p>

    </div>
  )
}

export default App
