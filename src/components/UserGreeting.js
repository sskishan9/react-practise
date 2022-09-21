import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    // if(this.state.isLoggedIn)
    // {
    //     return(
    //         <div>
    //             <h1>Welcome Sameer</h1>
    //         </div>
    //     )
    // }
    // else 
    // {
    //     return(
    //         <div>
    //             <h2>Please Login</h2>
    //         </div>
    //     )
    // }


    // let msg;
    // if(this.state.isLoggedIn)
    // {
    //     msg=<div><h1>Welcome Sameer</h1></div>
    // }
    // else 
    // {
    //     msg=<div><h1>Please Login</h1></div>
    // }
    // return(
    //     <div>
    //         {msg}
    //     </div>
    // )

    return(
        this.state.isLoggedIn?
        <div><h1>Hello Sameer</h1></div>:
        <div><h1>Please Login</h1></div>
    )
    
  }
}

export default UserGreeting