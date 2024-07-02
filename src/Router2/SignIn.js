import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    let navvi = useNavigate()
    let lg = () =>{
        localStorage.setItem('aman',true)
            navvi('/')
    }
    
  
  return (
    <div>SignIn
        <button onClick={lg}>Click</button>
    </div>
   
  )
}

export default SignIn