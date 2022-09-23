import React, { Component } from 'react'
import axios from 'axios'
 class AxiosGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{console.log(error)})
    }
  render() {
    return (
      <div>
        <h1>Axios Get</h1>
        {this.state.posts.map(p=>
            <h3 key={p.id}>{p.id} {p.title}</h3>)}
      </div>
    )
  }
}

export default AxiosGet