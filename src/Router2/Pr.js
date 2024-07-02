import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Pr(props) {
    let {Prop} = props
    let navv = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem("aman")
        if(!login){
            navv('/SignIn')
        }
    })
  return (
    <>
    <Prop />
        
    </>
  )
}

export default Pr