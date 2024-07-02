import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Navbar() {
  return (
    < > 
    <div className="nav justify-content-evenly col-5">
        <li className='nav-item'><NavLink className="NavLink " to="/">Home</NavLink></li>
        <li className='nav-item'><NavLink className="NavLink" to="/About">About</NavLink></li>
        <li className='nav-item'><NavLink className="NavLink" to="/User">User</NavLink></li>

        
    </div>



    </>
  )
}

export default Navbar