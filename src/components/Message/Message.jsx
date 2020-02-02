import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import './Message.scss'

const Message = ({ title, strongTitle, description }) => {
  const [show, setShow] = useState(true)
  const hiddeMessage = useCallback(() => {
    setShow(false)
  }, [])

  return show && (
    <div className="message">
      <p className="message__title">
        {title} <br /><span className="message__strong-title">{strongTitle}</span>
      </p>
      <p className="message__description">{description}</p>
      <button className="message__close" onClick={hiddeMessage}>X</button>
    </div>
  )
}

Message.propTypes = {
  title: PropTypes.string.isRequired,
  strongTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Message
