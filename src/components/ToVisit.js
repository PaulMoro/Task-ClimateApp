import React from 'react'

/* Assets */
import location from '../../assets/icons/20314.png'

/* styles */
import ToVisitStyles from '../styles/ToVisitStyles'

const ToVisit = () => {
  return(
    <div className="toVisit">
      <div className="title">
        <div className="title_section">
          <h2 className="title_section-bold">Place to</h2>
          <p className="title_section-light">Visit</p>
        </div>
        <div className="title_users">
          <h4 className="title_users-title">+ Top Reviews</h4>
          <div className="title_users-img">
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <span>6+</span>
          </div>
        </div>
      </div>
      <div className="places">
        <div className="places_first">
          <div className="places_first-description">
            <img src={location} alt=""/>
            <h3>Arab Street Singapore</h3>
          </div>
        </div>
        <div className="places_second">
          <div className="places_second-description">
            <img src={location} alt=""/>
            <h3>Arab Street Singapore</h3>
          </div>
        </div>
        <div className="places_third">
          <div className="places_third-description">
            <img src={location} alt=""/>
            <h3>Arab Street Singapore</h3>
          </div>
          <div className="places_third-plus">
            <span>+</span>
          </div>
        </div>
      </div>
      <style jsx ToVisitStyles>
        {ToVisitStyles}
      </style>
    </div>
  )
};

export default ToVisit;