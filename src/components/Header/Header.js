import React from 'react'
import { NavLink } from 'react-router-dom'
import header from './Header.css'
const Header = () => {
  return (
    <div>
        <NavLink className={({isActive})=> isActive ? 'active' : undefined} to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/posts">Post</NavLink>
    </div>
  )
}

export default Header