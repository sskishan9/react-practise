import React,{Component} from 'react';

class StateExample extends Component {
    constructor()
    {
        super()
        this.state={
            msg:'Welcome Visitor'
        }
    }
    handleChange()
    {
        this.setState({
            msg:'Thank You for Subscribing!'
        })
    }
    render(){
        return(
            <div>
                <hr/>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.handleChange()}>Subscribe</button>
            </div>
        )
    }
}
export default StateExample;