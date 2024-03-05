import React, { createContext } from 'react';
import './App.css';
// import Memo from './Memo';
//  import Component1 from './Comp1'; 
// import RefDemo from './RefDemo';
// import RefDemo2 from './RefDemo2';
// import UseStateDemo from './UseStateDemo';
// import Useeffect2 from './Useeffect2';
// import RefDemo3 from './RefDemo3';
// import ReducerDemo from './ReducerDemo';
 import ParentCallback from './ParentCallback';

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Sanjay'}>  
        <Component1 />
      </UserContext.Provider> */}
      {/* <UseStateDemo/> */}
      {/* <Useeffect2/> */}
      {/* <RefDemo/> */}
      {/* <RefDemo3/> */}
      {/* <RefDemo2/> */}
      {/* <ReducerDemo/> */}
      <ParentCallback/>
      {/* <Memo/> */}
    </div>
  );
}

export default App;