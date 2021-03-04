import React from 'react'

/* styles */
import CitiesStyles from '../styles/CitiesStyles'

const Cities = () => {
  return(
    <div className="cities">
      <div className="citiesContainer">
        <div className="citiesContainer_data">
          <img src="" alt=""/>
          <div className="citiesContainer_inf">
            <div className="citiesContainer_inf-degrees">
              <p>29</p>
              <span>°C</span>
            </div>
            <div className="citiesContainer_inf-line"></div>
            <div className="citiesContainer_inf-city">
              <h3>Lyon</h3>
              <p>Francia</p>
            </div>
          </div>
        </div>
        <div className="citiesContainer_weather">
          <h4>Humidity 64%</h4>
          <h4>Nortwest</h4>
          <h4>8.3km/h</h4>
        </div>
      </div>
      <div className="citiesContainer">
        <div className="citiesContainer_data">
          <img src="" alt=""/>
          <div className="citiesContainer_inf">
            <div className="citiesContainer_inf-degrees">
              <p>29</p>
              <span>°C</span>
            </div>
            <div className="citiesContainer_inf-line"></div>
            <div className="citiesContainer_inf-city">
              <h3>Paris</h3>
              <p>Francia</p>
            </div>
          </div>
        </div>
        <div className="citiesContainer_weather">
          <h4>Humidity 48%</h4>
          <h4>West</h4>
          <h4>0.3km/h</h4>
        </div>
      </div>
      <div className="add">
        <button>Add Locations</button>
        <img src="" alt=""/>
      </div>
      <style jsx ToVisitStyles>
        {CitiesStyles}
      </style>
      
    </div>
  )
};

export default Cities;