import React from 'react'

import './Footer.scss'
import Icon from '../Icon/Icon'

const Footer = () => (
  <div className="footer">
    <div className="footer__links">
      <a className="footer__link">Terms and Conditions</a>
      <a className="footer__link">Privacy Policy</a>
      <a className="footer__link">Contact Us</a> 
    </div>
    <div className="footer__follow">
      <span>Follow Us</span>
      <a className="footer__follow-link"><Icon className="footer__icon" name="#facebook" /></a>
      <a><Icon className="footer__icon" name="#twitter" /></a>
    </div>
  </div>
)

export default Footer
