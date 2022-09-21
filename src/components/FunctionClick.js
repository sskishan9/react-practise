import React from 'react'

function FunctionClick() {
    const clickHandler=()=>{
        console.log('Button clicked')
    }
  return (
    <div>
        <hr/>
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick