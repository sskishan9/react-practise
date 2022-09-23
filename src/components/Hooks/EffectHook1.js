import React,{useState,useEffect} from 'react'

function EffectHook1() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    const handleIncrement=()=>{
        setCount(prevcount=>prevcount+1)
    }
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    useEffect(()=>{
        console.log('Updating Document title')
        document.title=`You have clicked ${count} times`
    },[count])
    
  return (
    <div>
        <h1>Use Effect Hook</h1>
        <h4>Count:{count}</h4>
        <input type="text" value={name} onChange={nameHandler}/>
        <button onClick={handleIncrement}>Increment</button>
        
    </div>
  )
}

export default EffectHook1