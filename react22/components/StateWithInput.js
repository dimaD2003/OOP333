import React, { useEffect, useState, useRef } from "react";
function StateWithInput() {
    // myName is the variable
    // setMyName is the updater function
    // Create a state variable with initial value
    // being an empty string ""
    const [myName, setMyName] = useState("");
  
    function handleOnChange(text) {
      setMyName(text);
    }
  
    return (
      <div>
        <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
        <button> input</button>
      </div>
    );
  }

  export default StateWithInput