import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <h1>My Blog</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/course">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/schedule">Schedule</Link>

          <Link to="/signup"><button className='btn'>SIGNUP</button></Link>
          <Link to="/login"><button className='btn'>LOGIN</button></Link>
        </nav>
      </header>
    </div>
  )
}

export default Header