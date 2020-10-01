import React, { Component } from "react";
import {Navbar, Card} from "react-bootstrap";
import Image from './logo.svg';
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
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Simple-Clicker</Navbar.Brand>
            </Navbar>
            <br/>
            <div>
                <center>
                <h1>Hello, Welcome to Simple-Clicker!</h1>
                <br/>
                <p>Built by UltimateRoman and Abelzach</p>
                <br />
                <p>Check it out and support us if you loved it!</p>
                <h3>You have clicked the button {count} times</h3>
                <span>
                    <Button variant="primary" onClick={(e) => this.handleClick()}>Click Me</Button>
                </span>
                </center>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>Hey there</Card.Title>
                    <Card.Text>
                    Check out our works on GitHub
                    </Card.Text>
                </Card.Body>
            </Card>
            </React.Fragment>            
        )
        
}
}
export default Application;