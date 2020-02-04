import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

import './ThumbButton.scss'

const ThumbButton = ({ className, type, size }) => (
  <button className={`thumb-button ${size} ${type} ${className}`}><Icon name={`#thumbs-${type}`} className={size}/></button>
)

ThumbButton.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  className: PropTypes.string
}

ThumbButton.defaultProps = {
  className: ''
}

export default ThumbButton
