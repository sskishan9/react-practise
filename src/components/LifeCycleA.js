//LifeCycle Mounting Updating
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:'Sameer'
      }
      console.log('LiecycleA Constructor')
    }
    static getDerivedStateFromProps(props,state)
    {   console.log('LifecycleA GetDerivedStateFromprops')
        return null
    }
    componentDidMount()
    {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate()
    {
        console.log('Lifecycle A ShouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate()
    {
        console.log('LifecycleA ComponentDidUpdate');
    }
    changeState=()=>{
        this.setState({
            name:'Sameer Kishan Varma'
        })
    }
  render() {
    console.log('LifecycleA Render')
    return (
      <div>
        <hr/>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
       </div>
    )
  }
}

export default LifeCycleA