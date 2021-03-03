import React from 'react'

const ToVisit = () => {
  return(
    <div className="toVisit">
      <div className="title">
        <div className="title_section">
          <h2 className="title_section-bold">Place to</h2>
          <h2 className="title_section-light">Visit</h2>
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
          <img src="" alt=""/>
          <div className="places_first-description">
            <h3>arab Street Singapore</h3>
          </div>
        </div>
        <div className="places_second">
          <img src="" alt=""/>
          <div className="places_second-description">
            <h3>arab Street Singapore</h3>
          </div>
        </div>
        <div className="places_third">
          <img src="" alt=""/>
          <div className="places_third-description">
            <h3>arab Street Singapore</h3>
          </div>
        </div>
        <div className="place_plus">
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  )
};

export default ToVisit;