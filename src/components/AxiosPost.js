import React, { Component } from 'react'
import axios from 'axios'
class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
         title:'',
         body:''
      }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})

    }
  render() {
    const {userid,title,body}=this.state
    return (
      <div>
        <h2>Axios Post</h2>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userid" value={userid} onChange={this.changeHandler}/>

            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AxiosPost