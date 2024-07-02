import React, { useState } from 'react'

function PrevState() {
    let [state,PrevState] = useState("Hellooo")
    let [st,setSt] = useState("")
    function fnc(){
        PrevState((prev)=>{
            setSt(prev)
            return "Dear"
        })
    }
  return (
    <>
      <h1>Previous State</h1>
      <p>{st}</p>
      <h1>Next State</h1>
      <p>{state}</p>
      <button onClick={fnc}>Click</button>
    </>
  )
}

export default PrevState
