import React,{useState,useEffect} from 'react'
import HookMouse from './HookMouse'
function MouseContainer() {
    const [display,setDisplay]=useState(true)
    const handleToggle=()=>{
        setDisplay(!display)
    }
  return (
    <div>
        <h3>Mouse Container</h3>
        <button onClick={handleToggle}>Toggle Display</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer