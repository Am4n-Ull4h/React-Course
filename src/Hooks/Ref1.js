import React, { Component,createRef } from 'react'

export default class Ref1 extends Component {
    constructor(){
        super();
        this.aman = createRef();
    }

    componentDidMount(){
        console.log(this.aman.current.style.color = "orange")
    }
  render() {
    return (
      <>
        <h1 ref={this.aman}>Hellooo</h1>
        <button>Click</button>
        
      </>
    )
  }
}
