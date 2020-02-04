import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { updateTrial } from '../../services/trials'

import './Opinion.scss'
import ThumbButton from '../ThumbButton/ThumbButton'
import Icon from '../Icon/Icon'

const Opinion = ({
  _id: trialId,
  name,
  description,
  wikiLink,
  stats: { thumbsUp, thumbsDown }
}) => {
  const [isVotedMode, setIsVotedMode] = useState(false)
  const [ thumbsUpVotes, setThumbsUpVotes] = useState(thumbsUp)
  const [ thumbsDownVotes, setThumbsDownVotes] = useState(thumbsDown)

  function resetForm() {
    setIsVotedMode(false)
  }

  function handleVote(type) {
    return () => {
      const isDown = type === 'down'
      const stats = {
        thumbsDown: isDown ? thumbsDownVotes + 1 : thumbsDownVotes,
        thumbsUp: !isDown ? thumbsUpVotes + 1 : thumbsUpVotes,
      }
      updateTrial(trialId, { stats }).then(data => {
        setThumbsUpVotes(data.stats.thumbsUp)
        setThumbsDownVotes(data.stats.thumbsDown)
        setIsVotedMode(true)
      })
    }
  }
  return (
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
          <Icon name="#wiki" className="opinion__icon" />More information
        </a>
        <p className="opinion__verdict">{isVotedMode ? 'Thank you for voting!' : "What's Your Verdict?"}</p>
      </article>
      {/*<div className="opinion__bgblur" />*/}
      <div className="opinion__actions">
        {isVotedMode ? <button className="opinion__vote-again" onClick={resetForm}>Vote Again</button> :
          <Fragment>
            <ThumbButton type="up" size="large" onClick={handleVote('up')} />
            <ThumbButton type="down" size="large" onClick={handleVote('down')} />
          </Fragment>
        }
      </div>
    </div>
  )
}

Opinion.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wikiLink: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    thumbsUp: PropTypes.number.isRequired,
    thumbsDown: PropTypes.number.isRequired,
  })
}

export default Opinion
