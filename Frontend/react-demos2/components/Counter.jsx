import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count+1);
  return (
    <div>
        <h1>Value: {count}</h1>
        <button onClick={increase}>Increment</button>
    </div>
  )
}

export default Counter