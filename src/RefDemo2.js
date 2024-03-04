import React from 'react'
import { useRef,useEffect} from 'react'

const RefDemo2 = () => {
    const reference = useRef();
    useEffect(() => {
     
        reference.current.focus();
    }, []); 
  
  return (
    <div>
      <input type="text" ref={reference} />
   
    </div>
  )
}

export default RefDemo2
