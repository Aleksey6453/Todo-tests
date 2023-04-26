import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount ] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className='btn'>Increment</button> <br />
            <button onClick={decrement} className='btn'>Decrement</button> <br /> 
        </div>
 
    )
}
export default Counter



