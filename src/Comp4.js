// Component4.js
import React, { useContext } from 'react';
import { UserContext } from './App'; 

function Component4() {
  const user = useContext(UserContext); 

  return (

    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2> 
    </>
  );
}

export default Component4;
