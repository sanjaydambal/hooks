import React, { useEffect, useState } from 'react';

const Useeffect2 = () => {
    const [count, setCount] = useState(0);
    const[calculate, setCalculate] = useState(0);

    useEffect(() => {
     setCalculate(()=>count*2);
    });

    return (
        <div>
            <h1>I have rendered {count} times</h1>
            <button type='button' onClick={() => setCount(count =>count + 1)}>Click Me</button>
            <h1>I have calculated {calculate} times</h1>
        </div>
    );
}

export default Useeffect2;
