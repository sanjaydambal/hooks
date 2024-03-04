import React, { useCallback } from 'react'

import ChildCallback from './ChildCallback';

const ParentCallback = () => {
    const [count, setCount] = React.useState(0);
    const [todo, setTodo] = React.useState([])

    const increment = () => {
        setCount(count + 1);
    }
    const addTodo = useCallback(() => {
        setTodo([...todo, "New Todo"])
    },[todo])
  return (
    <div>
      <ChildCallback todo={todo} addTodo={addTodo} />
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default ParentCallback
