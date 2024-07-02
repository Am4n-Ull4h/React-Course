import React, { useRef } from 'react'

function RefFunc() {
    let aman = useRef(null)
    function fnc(){
        aman.current.style.color = "red"
    }

    function fnc2(){
        aman.current.style.color = "orange"
    }
  return (
      < >
    <h1 ref={aman} onMouseOver={fnc} onMouseLeave={fnc2}>Hellooo</h1>

    </>
  )
}

export default RefFunc