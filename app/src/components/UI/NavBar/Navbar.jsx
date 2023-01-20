import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <NavLink to='/posts'>Посты</NavLink>
        <NavLink to='/about'>О сайте</NavLink>
      </div>
    </div>
  )
}

export default Navbar