import React from 'react'
import './Navabar.css'
import { NavLink } from 'react-router-dom'
function Navabar() {
  return (
    <div className='navbar'>
        <nav className='navContent'>
            <div className='logo'>
              <img src="https://themes.getmotopress.com/oceanica/wp-content/uploads/sites/7/2017/08/oceanica_logo.svg" alt="logo" />
              <h1>Booking.com</h1>
            </div>
            <ul>
               <NavLink to=''><li>ROOMS</li></NavLink> 
               <NavLink to=''><li>SERVICES</li></NavLink> 
               <NavLink to=''><li>NEWS</li></NavLink>
               <NavLink to=''><li>ABOUT</li></NavLink>
            </ul>
            <div className='users-Btn'>
             <p className='Register'>Register</p>
             <p className='signin'>Sign in</p>
            </div>
        </nav>
       <div className='navbar-bg'>
        <div className="searchBox">
            
        </div>
       </div>
    </div>
  )
}

export default Navabar