import React from 'react'
import PropTypes from 'prop-types'

import './ThumbButton.scss'

const ThumbButton = ({ type, size }) => (
  <button className={`thumb-button ${size} ${type}`}>{type}</button>
)

ThumbButton.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default ThumbButton
