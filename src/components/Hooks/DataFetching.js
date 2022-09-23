import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts,setPosts]=useState({})
    const [id,setId]=useState(1)
    const handleChange=(e)=>{
        setId(e.target.value)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{console.log(err)})
    },[id])
  return (
    <div>
        <h2>Data Fetching through UseEffect</h2>
        <input type="text" value={id} onChange={handleChange}/>
        <h3>{posts.title}</h3>
    </div>
  )
}

export default DataFetching