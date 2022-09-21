import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Hello'
      }
    }
    handleClick(){
        this.setState({
            msg:'Good Bye!'
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <h3>{this.state.msg}</h3>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind