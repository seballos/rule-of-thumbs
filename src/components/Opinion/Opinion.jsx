import React, { Fragment } from 'react'

import './Opinion.scss'
import ThumbButton from '../ThumbButton/ThumbButton'

const Opinion = () => (
  <div className="opinion">
    <article className="opinion__content">
      <p>
        What's your opinion on</p>
      <span className="opinion__personality">Pope Francis?</span>
      <p>
        He's talking tough on clergy sexual abuse,
        but is he just another papal pervert protector?
        (thumbs down) or a true pedophile punishing pontiff?(thumbs up)
    </p>
      <a>More information</a>
      <p>What's Your Verdict?</p>
    </article>
    <div className="opinion__actions">
      <ThumbButton type="up" size="large" />
      <ThumbButton type="down" size="large" />
    </div>
  </div>
)

export default Opinion
