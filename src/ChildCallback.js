import React from 'react'
import{memo} from'react'

const ChildCallback = ({todo,addTodo}) => {
    console.log("Child Rendered")
  return (
    <div>
      {
        todo.map((item,index) => {
          return <div key={index}>{item}</div>
        })
      }
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(ChildCallback)
