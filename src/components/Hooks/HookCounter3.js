import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({firstName:'',lastName:''}) 
    const firstNameHandler=(e)=>{
        setName({...name,firstName:e.target.value})
    }
    const lastNameHandler=(e)=>{
        setName({...name,lastName:e.target.value})
    }
  return (
    <div>
        <h3>Hook Counter3</h3>
        <form>
            <input type="text" value={name.firstName} onChange={firstNameHandler} />
            <input type="text" value={name.lastName} onChange={lastNameHandler}/>
        </form>
        <h2>Your firstName is {name.firstName}</h2>
        <h2>Your lastName is {name.lastName}</h2>
    </div>
  )
}

export default HookCounter3