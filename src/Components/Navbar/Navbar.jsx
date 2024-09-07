import React from 'react'
import './Navbar.css'
import logo from '../../assets/group 3.png'

const Navbar = () => {
  return (
    <>
        <nav className='nav'>
                <img className='img' src={logo} alt="" />
            <ul className='ul'>
                <li className='li'><a className='aa' href="">Home</a></li>
                <li className='li'><a className='a' href="">About</a></li>
                <li className='li'><a className='a' href="">Services</a></li>
                <li className='li'><a className='a' href="">Projects</a></li>
            </ul>
            <button>Contact us</button>
        </nav>
    </>
  )
}

export default Navbar