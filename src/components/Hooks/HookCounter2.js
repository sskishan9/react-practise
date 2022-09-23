import React,{useState} from 'react'

function HookCounter2() {
    const [count,setCount]=useState(0)
    const handleDecrement=()=>{
        setCount(prevcount=>prevcount-1)
    }
    const handleReset=()=>{
        setCount(0)
    }
    const handleIncrement=()=>{
        setCount(prevcount=>prevcount+1)
    }
  return (
    <div>
        <h2>Hook Counter2</h2>
        <h3>Count is {count}</h3>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default HookCounter2