import React from 'react'
import './Navbar.css'
import logo from '../../assets/group 3.png'

const Navbar = () => {
  return (
    <>
        <nav>
                <img src={logo} alt="" />
            <ul>
                <li><a className='aa' href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
            </ul>
            <button>Contact us</button>
        </nav>
    </>
  )
}

export default Navbar