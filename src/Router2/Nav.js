import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function Nav() {
    let navv = useNavigate();
    function func(url){
        navv(url)
    }
  return (
    <>
      <ul className='nav justify-content-evenly'>
        <li><NavLink className="links" to='/'>Home</NavLink></li>
        <li><NavLink className="links" to='/About'>About</NavLink></li>
        <li><NavLink className="links" to='/Contact'>Contact</NavLink></li>
        <button className='btn btn-outline-danger' onClick={()=>func('/SignIn')}>Sign In</button>
        <button className='btn btn-outline-danger' onClick={()=>func('/SignUp')}>Sign Up</button>
      </ul>
    </>
  )
}

export default Nav
