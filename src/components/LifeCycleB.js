//LifeCycle Mounting Updating
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:'Sameer'
      }
      console.log('LiecycleB Constructor')
    }
    static getDerivedStateFromProps(props,state)
    {   console.log('LifecycleB GetDerivedStateFromprops')
        return null
    }
    componentDidMount()
    {
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate()
    {
        console.log('LifecycleB ShouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate()
    {
        console.log('LifecycleB ComponentDidUpdate');
    }
  render() {
    console.log('LifecycleB Render')
    return (
      <div>
        <hr/>
        LifeCycleB
       </div>
    )
  }
}

export default LifeCycleB