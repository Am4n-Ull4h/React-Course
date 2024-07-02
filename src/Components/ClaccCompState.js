import React, { Component } from 'react'

export default class ClaccCompState extends Component {
    constructor(){
        super();

        this.state = {
            aman : "Dear",
            bhi : " Jiggar"
        }
    }
    change(){
        this.setState({aman:"Dearest"})
    }
  render() {
    return (
      <>
        <h1>Hellooo {this.state.aman + this.state.bhi}</h1>
        <button onClick={()=>{this.change()}}>Click me</button>
      </>
    )
  }
}
