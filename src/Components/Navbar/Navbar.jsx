import React from 'react'
import './Navbar.css'
import logo from '../../assets/group 3.png'

const Navbar = () => {
  return (
    <>
        <nav className='navl'>
                <img className='imgl' src={logo} alt="" />
            <ul className='ull'>
                <li className='lil'><a className='aa' href="">Home</a></li>
                <li className='lil'><a className='al' href="">About</a></li>
                <li className='lil'><a className='al' href="">Services</a></li>
                <li className='lil'><a className='al' href="">Projects</a></li>
            </ul>
            <button className='buttonl'>Contact us</button>
        </nav>
    </>
  )
}

export default Navbar