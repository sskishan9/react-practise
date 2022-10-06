import React,{useReducer} from 'react'
const initialState={
    firstcounter:0
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {firstcounter:state.firstcounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UseReducerCounter2 = () => {
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h2>Count -{count.firstcounter}</h2>
        <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'increment', value:5})}>Increment5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerCounter2