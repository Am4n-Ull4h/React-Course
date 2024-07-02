import React,{useEffect} from 'react'

function User1(props) {
    useEffect(()=>{
        console.log("Count")
    },[props.count])
  return (
    <div>
      <h1>1st Props: {props.count} </h1>
      <h1>2nd Props: {props.data} </h1>
    </div>
  )
}

export default User1
