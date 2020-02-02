import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, name }) => (
  <svg className={className}>
    <use xlinkHref={name}/>
  </svg>
)

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {
  className: ''
}

export default Icon
