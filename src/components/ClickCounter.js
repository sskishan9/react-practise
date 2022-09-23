import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleClick=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClickCounter