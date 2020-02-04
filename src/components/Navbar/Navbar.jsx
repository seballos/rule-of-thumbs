import React, { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon/Icon'
import './Navbar.scss'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function toggleMenu() {
    setShowMobileMenu(!showMobileMenu)
  }
  
  function closeMenu() {
    setShowMobileMenu(false)
  }

  // this is not a fancy way but we need to aovid scrolling when the menu
  // is active
  document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <h1 className="navbar__title">
          <NavLink className="navbar__main-link" to="/" onClick={closeMenu}>Rule of Thumb.</NavLink>
        </h1>
        <button className="navbar__mobile-button" onClick={toggleMenu}>
          <span/>
          <span/>
          <span/>
        </button>
        <ul className={`navbar__list ${showMobileMenu ? 'navbar__list--show-mobile' : ''}`}>
          <li className="navbar__list__item"><NavLink className="navbar__link" to='/past-trials' onClick={closeMenu}>Past Trials</NavLink></li>
          <li className="navbar__list__item"><NavLink className="navbar__link" to='/how-it-works' onClick={closeMenu}>How it works</NavLink></li>
          <li className="navbar__list__item">Login/SignUp</li>
          <li className="navbar__list__item"><Icon name="#glass" className="navbar__search" /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
