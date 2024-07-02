import React, { Component, createRef } from 'react'

export default class Ref2 extends Component {
    constructor(){
        super();
        this.rff = createRef();
    console.log("Hello3")

        
    }
    componentDidMount(){
        this.rff.current.style.color = "red"
    console.log("Hello2")


    }
    
  render() {
    console.log("Hello1")
    return (
      <div>
        <h1 ref={this.rff}>This is a REFF</h1>
      </div>
    )
  }
}
