import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('auth', 'false')
  }
  return (
    <div className='navbar'>
      {
        isAuth && <MyButton onClick={logout}>Выйти</MyButton>
      }
      
      <div className='navbar__links'>
        <NavLink to='/posts'>Посты</NavLink>
        <NavLink to='/about'>О сайте</NavLink>
      </div>
    </div>
  )
}

export default Navbar