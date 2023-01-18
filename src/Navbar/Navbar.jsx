import React from 'react'
import Logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'><img className='nav-logo' style={{height: "40px", width: "100px"}} src={Logo} alt="navlogo"/></Link>
        <div className='nav-item'>
            <Link className='nav-link' to='/'>HOME</Link>
            <Link className='nav-link' to='/'>CAREER CAMP</Link>
            <Link className='nav-link' to='/'>TECHNICAL COURSES ▼</Link>
            <Link className='nav-link' to='/'>NON TECHNICAL COURSES ▼</Link>
            <Link className='nav-link' to='/'>TRAINING JOURNEY</Link>
            <Link className='nav-link' to='/'>CONTACT US</Link>
        </div>
    </nav>
    
  )
}

export default Navbar