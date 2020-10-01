import React, { Component } from "react";
import './css/style.css';
class Application extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    handleClick = () => {
        console.log("Clicked");
        this.setState({count: this.state.count +1});
    }
componentDidUpdate(props,state){
    console.log("Updated from",state, "to", this.state);
}

    render(){
            let {count} = this.state
        return(
            <div>
                <h1>You clicked the button {count} times</h1>
                <span>
                    <button onClick={(e) => this.handleClick()}>Click Me</button>
                </span>
            </div>
            
            
        )
        
}
}
export default Application;