import React, { Component } from 'react'

class Counter extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    handleIncrement()
    {
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
  render() {
    return (
      <div>
        <hr/>
        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.handleIncrement()}>Increment</button>
      </div>
    )
  }
}

export default Counter