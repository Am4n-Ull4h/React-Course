import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super()
        this.state = {
            name:0
        }
    }
  render() {
    console.log("Helloo")
    return (
      <>
       <h1>Hellooo Dear : {this.state.name}</h1> 
       <button onClick={()=>{this.setState({name:this.state.name + 1})}}>Click</button>
      </>
    )
  }
}
