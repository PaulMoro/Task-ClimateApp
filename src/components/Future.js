import React from 'react'

const Future = () => {
  return(
    <>
      <div className="title">
        <h2>3 Days</h2>
        <h2>Forecast</h2>
      </div>
      <div className="dayContainer">
        <div className="day">
          <div className="day_weather">
            <img src="" alt=""/>
            <div className="day_weather-precise">
              <p>Friday</p>
              <h4>Cloudy</h4>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day_weather">
            <img src="" alt=""/>
            <div className="day_weather-precise">
              <p>Friday</p>
              <h4>Cloudy</h4>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day_weather">
            <img src="" alt=""/>
            <div className="day_weather-precise">
              <p>Friday</p>
              <h4>Cloudy</h4>
            </div>
          </div>
          <div className="day_degrees">
            <p>32°</p>
            <span>/</span>
            <p>35°</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Future;