import React,{useReducer} from 'react'
const initialState={
    firstCounter:0
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {firstCounter:state.firstCounter+action.value}
            
        case 'decrement':
            return {firstCounter:state.firstCounter-action.value}
            
        case 'reset':
            return initialState
        
        case 'incrementfive':
            return {firstCounter:state.firstCounter+action.value}
        case 'decrementfive':
            return {firstCounter:state.firstCounter-action.value}
        default:
            return state
        
    }
}

function CounterTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h2>Count -{count.firstCounter}</h2>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'incrementfive',value:5})}>Increment5</button>
        <button onClick={()=>dispatch({type:'decrementfive',value:5})}>Decrement5</button>
    </div>
  )
}

export default CounterTwo