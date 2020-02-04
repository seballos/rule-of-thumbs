import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Trial from './Trial'

import './Trials.scss'
import AddName from '../AddName/AddName'

const Trials = ({ model }) => (
  <Fragment>
    <span className="trials__votes">Votes</span>
    <div className="trials">

      {model.map(personInformation => (
        <Trial {...personInformation} key={personInformation.name} />
      ))}
    </div>
    <AddName />
  </Fragment>
)

Trials.propTypes = {
  model: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    trialDate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      thumbsUp: PropTypes.number.isRequired,
      thumbsDown: PropTypes.number.isRequired,
    })
  })).isRequired
}

export default Trials
