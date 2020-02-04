import React from 'react'
import PropTypes from 'prop-types'

import Opinion from '../Opinion'

import './Hero.scss'

const Hero = ({ bgImage, trialDueDate, ...props }) => {
  // calculate the day until the contest end
  const diffDate = Math.ceil((new Date(trialDueDate).getTime() - new Date().getTime())/(1000 * 3600 * 24))
  return (
    <div className="hero">
      <div className="hero__background" style={{ backgroundImage: `url('${bgImage}')` }}>
        <img className="hero__image" src={`${bgImage}`} />
        <Opinion {...props} />
        <div className="hero__closing">
          <div className="hero__closing__status hero__closing__in"><span>Closing in</span></div>
          <div className="hero__closing__status hero__closing__date"><span>{diffDate} Days</span></div>
        </div>
      </div>
    </div>
  )
} 

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  trialDueDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    thumbsUp: PropTypes.number.isRequired,
    thumbsDown: PropTypes.number.isRequired,
  })
}

export default Hero
