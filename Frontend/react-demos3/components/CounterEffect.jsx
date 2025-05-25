import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count}`
    }, [count])
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect