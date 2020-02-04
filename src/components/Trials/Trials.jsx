import React, { Fragment, useReducer } from 'react'
import PropTypes from 'prop-types'
import Trial from './Trial'
import AddName from '../AddName/AddName'
import { trialsReducer, UPDATE_VOTING } from './Trials.reducer'

import './Trials.scss'

const Trials = ({ model }) =>  {
  const [state, dispatch] = useReducer(trialsReducer, model)

  function updateVoting(index, stats) {
    dispatch({ type: UPDATE_VOTING, index, stats})
  }

  return (
    <Fragment>
      <span className="trials__votes">Votes</span>
      <div className="trials">
  
        {state.map((personInformation, index) => (
          <Trial index={index} key={personInformation.name} onVote={updateVoting} {...personInformation} />
        ))}
      </div>
      <AddName />
    </Fragment>
  )
}



Trials.propTypes = {
  model: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    trialDueDate: PropTypes.string.isRequired,
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
