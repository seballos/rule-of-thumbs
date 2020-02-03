import React, { Fragment } from 'react'

import './Opinion.scss'
import ThumbButton from '../ThumbButton/ThumbButton'
import Icon from '../Icon/Icon'

const Opinion = () => (
  <div className="opinion">
    <article className="opinion__content">
      <p> 
        What's your opinion on</p>
      <p className="opinion__name">Pope Francis?</p>
      <p className="opinion__description">
        He's talking tough on clergy sexual abuse,
        but is he just another papal pervert protector?
        (thumbs down) or a true pedophile punishing pontiff?(thumbs up)
      </p>
      <a 
        href="https://en.wikipedia.org/wiki/Pope_Francis" 
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

export default Opinion
