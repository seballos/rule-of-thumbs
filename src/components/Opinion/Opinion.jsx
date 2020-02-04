import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Opinion.scss'
import ThumbButton from '../ThumbButton/ThumbButton'
import Icon from '../Icon/Icon'

const Opinion = ({ name, description, wikiLink }) => (
  <div className="opinion">
    <article className="opinion__content">
      <p> 
        What's your opinion on</p>
      <p className="opinion__name">{name}?</p>
      <p className="opinion__description">{description}</p>
      <a 
        href={wikiLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="opinion__link"
      >
        <Icon name="#wiki" className="opinion__icon"/>More information
      </a>
      <p className="opinion__verdict">What's Your Verdict?</p>
    </article>
    {/*<div className="opinion__bgblur" />*/}
    <div className="opinion__actions">
      <ThumbButton type="up" size="large" />
      <ThumbButton type="down" size="large" />
    </div>
  </div>
)

Opinion.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wikiLink: PropTypes.string.isRequired
}

export default Opinion
