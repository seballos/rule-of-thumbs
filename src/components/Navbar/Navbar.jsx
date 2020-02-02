import React from 'react'

import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__wrapper">
      <h1 className="navbar__title">
        Rule of Thumb.
    </h1>
      <ul className="navbar__list">
        <li><NavLink className="navbar__link" to='/past-trials'>Past Trials</NavLink></li>
        <li><NavLink className="navbar__link" to='/how-it-works'>How it works</NavLink></li>
        <li>Login/SignUp</li>
        <li>Search</li>
      </ul>
    </div>
  </div>
)

export default Navbar
