import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
        
        <h1>This is Contact Page</h1>
        <ul className='nav justify-content-evenly'>
            <li><NavLink className="links" to="Help">Help</NavLink></li>
            <li><NavLink className="links" to="Support">Support</NavLink></li>
            <li><NavLink className="links" to="Need">Need</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Contact