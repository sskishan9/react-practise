import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName:'Parent'
      }
    }
    greetParent=(children)=>
    {
        alert(`Hello ${this.state.parentName} from ${children}`)
    }
  render() {
    return (
      <div>
        <hr/>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent