import React from 'react'
import Opinion from '../Opinion'

import './Hero.scss'

const IMAGE = "/public/images/francis-pope.jpg"
const Hero = () => (
  <div className="hero">
    <div className="hero__background" style={{ backgroundImage: `url('${IMAGE}')` }}>
      <img className="hero__image" src={`${IMAGE}`} />
      <Opinion />
      <div className="hero__closing">
        <div className="hero__closing__status hero__closing__in"><span>Closing in</span></div>
        <div className="hero__closing__status hero__closing__date"><span>22 Days</span></div>
      </div>
    </div>
  </div>
)

export default Hero
