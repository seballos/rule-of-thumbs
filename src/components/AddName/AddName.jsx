import React from 'react'
import './AddName.scss'

const IMAGE = '/public/images/add-name.jpg'

const AddName = () => (
  <div className="add-name">
    <div className="add-name__background" style={{ backgroundImage: `url('${IMAGE}')` }}>
      <div className="add-name__overlay">
        <p>Is there anyone else you would want to add?</p>
        <button className="add-name__button">Submit a Name</button>
      </div>
    </div>
  </div>
)

export default AddName
