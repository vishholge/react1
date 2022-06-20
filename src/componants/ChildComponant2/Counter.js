import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0,
        };

       

    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count +1,
        });
    }
    
  render() {
    let {count} = this.state;
    return (
      <div>
         <p style={{fontSize: "10rem", margin: "0" }}>{count} </p>
         <button onClick={this.incrementCounter}style = {{ padding: "10px"}}>Increment</button>
        
      </div>
    )
  }
}
