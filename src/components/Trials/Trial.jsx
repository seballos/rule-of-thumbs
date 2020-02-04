import React, { useState, Fragment, useMemo } from 'react'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import ThumbButton from '../ThumbButton/ThumbButton'
import { updateTrial } from '../../services/trials'

const voteSelectedClass = 'trial__actions__button--selected'
const thanksText = 'Thank you for voting!'
const voteNowText = 'Vote Now'
const voteAgainText = 'Vote Again'

const Trial = ({ 
    _id: trialId,
    index, 
    bgImage, 
    name, 
    trialDueDate, 
    category, 
    description, 
    stats: { thumbsUp, thumbsDown }, 
    onVote
 }) => {
  const [voteSeleted, setVoteSelected] = useState('')
  const [isVotedMode, setIsVotedMode] = useState(false)
  const totalVotes = thumbsUp + thumbsDown
  const overallStatus = thumbsUp > thumbsDown ? 'up' : 'down'

  const thumbsUpPercentage = (thumbsUp / totalVotes) * 100
  const thumbsDownPercentage = (thumbsDown / totalVotes) * 100

  function selectVote(type) {
    return () => {
      setVoteSelected(type)
    }
  }

  function handleVote() {
    if (isVotedMode) {
      setIsVotedMode(false)
      return
    }
    if(!voteSeleted) {
      return
    }
    const stats = {
      thumbsDown: isDown ? thumbsDown + 1 : thumbsDown,
      thumbsUp: isUp ? thumbsUp + 1 : thumbsUp,
    }
    updateTrial(trialId, { stats }).then( data => {
      onVote(index, data.stats)
      setVoteSelected('')
      setIsVotedMode(true)
    })
  }

  const isUp = voteSeleted === 'up'
  const isDown = voteSeleted === 'down'

  return (
    <div className="trial">
      <div className="trial__background" style={{ backgroundImage: `url('${bgImage}')` }}>
        <div className="trial__overlay">
          <div className="trial__information">
            <div className="trial__basic-info">
              <div className={`trial__overall-status trial__overall-status--${overallStatus}`}>
                <Icon className="trial__overall-status__icon" name={`#thumbs-${overallStatus}`} />
              </div>
              <div className="trial__bio">
                <h1 className="trial__bio__name">{name}</h1>
                <p className="trial__bio__date"><TimeAgo date={trialDueDate} className="trial__bio__ago" /> in {category}</p>
                <p>{isVotedMode ? thanksText : description}</p>
                <div className="trial__actions">
                  {
                    !isVotedMode && (<Fragment>
                      <ThumbButton
                        onClick={selectVote('up')}
                        className={`trial__actions__button ${isUp ? voteSelectedClass : ''}`}
                        type="up"
                        size="small"
                      />
                      <ThumbButton
                        onClick={selectVote('down')}
                        className={`trial__actions__button ${isDown ? voteSelectedClass : ''}`}
                        type="down"
                        size="small"
                      />
                    </Fragment>
                    )
                  }
                  <button onClick={handleVote} className="trial__vote-now">{isVotedMode ? voteAgainText : voteNowText}</button>
                </div>
              </div>
            </div>
            <div className="trial__stats">
              <div className="trial__stats__type trial__stats__type--up" style={{ width: `${thumbsUpPercentage}%` }}>
                <Icon name="#thumbs-up" className="trial__icon" />{thumbsUpPercentage.toFixed(0)}%
              </div>
              <div className="trial__stats__type trial__stats__type--down" style={{ width: `${thumbsDownPercentage}%` }}>
                {thumbsDownPercentage.toFixed(0)}%<Icon name="#thumbs-down" className="trial__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Trial.propTypes = {
  _id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  trialDueDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    thumbsUp: PropTypes.number.isRequired,
    thumbsDown: PropTypes.number.isRequired,
  }),
  onVote: PropTypes.func.isRequired
}

export default Trial
