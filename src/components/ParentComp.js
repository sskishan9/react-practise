import React, { Component } from 'react'
import RegComp from './RegComp'
import Purecomp from './Purecomp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sameer'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'Sameer'
            })
        },2000)
    }
  render() {
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name}></RegComp>
        <Purecomp name={this.state.name}></Purecomp>
       </div>
    )
  }
}

export default ParentComp