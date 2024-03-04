import React from 'react'
import { useState,useEffect,useRef } from'react';

const RefDemo3 = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInput = useRef(inputValue);
    useEffect(() => {
        previousInput.current = inputValue;
    },[inputValue])
  return (
    <div>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Previous value: {previousInput.current}</h1>
      <h1>Current Value: {inputValue}</h1>

    </div>
  )
}

export default RefDemo3
