import React from 'react'

const Cities = () => {
  return(
    <>
      <div className="citiesContainer">
        <div className="citiesContainer_img">
          <img src="" alt=""/>
        </div>
        <div className="citiesContainer_inf">
          <div className="citiesContainer_inf-degrees">
            <p>29</p>
            <span>°C</span>
          </div>
          <span>|</span>
          <div className="citiesContainer_inf-city">
            <h3>Lyon</h3>
            <p>Francia</p>
          </div>
        </div>
        <div className="citiesContainer_weather">
          <h4>Humidity 64%</h4>
          <h4>Nortwest</h4>
          <h4>8.3km/h</h4>
        </div>
      </div>
      <div className="citiesContainer">
        <div className="citiesContainer_img">
          <img src="" alt=""/>
        </div>
        <div className="citiesContainer_inf">
          <div className="citiesContainer_inf-degrees">
            <p>29</p>
            <span>°C</span>
          </div>
          <span>|</span>
          <div className="citiesContainer_inf-city">
            <h3>Paris</h3>
            <p>Francia</p>
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
    </>
  )
};

export default Cities;