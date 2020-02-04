import React from 'react'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import ThumbButton from '../ThumbButton/ThumbButton'

const Trial = ({ bgImage, name, trialDate, category, description, stats }) => {
  const { thumbsUp, thumbsDown } = stats
  const totalVotes = thumbsUp + thumbsDown
  const thumbsUpPercentage = (thumbsUp / totalVotes) * 100
  const thumbsDownPercentage = (thumbsDown / totalVotes) * 100
  const overallStatus = thumbsUp > thumbsDown ? 'up' : 'down'
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
                <p className="trial__bio__date"><TimeAgo date={trialDate} className="trial__bio__ago"/> in {category}</p>
                <p>{description}</p>
                <div className="trial__actions">
                  <ThumbButton className="trial__actions__button trial__actions__button--up" type="up" size="small" />
                  <ThumbButton className="trial__actions__button" type="down" size="small" />
                  <button className="trial__vote-now">Vote Now</button>
                </div>
              </div>
            </div>
            <div className="trial__stats">
              <div className="trial__stats__type trial__stats__type--up" style={{ width: `${thumbsUpPercentage}%` }}>
                <Icon name="#thumbs-up" className="trial__icon"/>{thumbsUpPercentage}%
              </div>
              <div className="trial__stats__type trial__stats__type--down" style={{ width: `${thumbsDownPercentage}%` }}>
                {thumbsDownPercentage}%<Icon name="#thumbs-down" className="trial__icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Trial.propTypes = {
  name: PropTypes.string.isRequired,
  trialDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    thumbsUp: PropTypes.number.isRequired,
    thumbsDown: PropTypes.number.isRequired,
  })
}

export default Trial
