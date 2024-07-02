import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavGit() {
    let nav = useNavigate();
    function navi(aman){
        nav(aman)
    }
  return (
    <div>
      
      <button onClick={()=>navi('/About')}>Click</button>
      <button onClick={()=>navi('/User')}>Click</button>
    </div>
  )
}

export default NavGit
