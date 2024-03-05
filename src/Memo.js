import React, { useMemo } from 'react'

const Memo = () => {
    const [count, setCount] = React.useState(0);
    const [todo, setTodo] = React.useState([])
    const calculate = useMemo(()=>{expensiveCalculation(count)},[count])

    const increment = () => {
        setCount(count + 1);
    }
    const addTodo = () => {
        setTodo([...todo, "New Todo"])
    }
  return (
    <div>
        <div>
       {
        todo.map((item,index) => {
          return <div key={index}>{item}</div>
        })
      }
      <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr/>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <h1>{calculate}</h1>
      </div>
    </div>
  )
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  

export default Memo
