import React from 'react'

/* styles */
import FutureStyles from '../styles/FutureStyles'

const Future = () => {
  return(
    <div className="future">
      <div className="title">
        <h2>3 Days</h2>
        <p>Forecast</p>
      </div>
      <div className="day">
        <div className="day_weather">
          <img src="" alt=""/>
          <div className="day_weather-precise">
            <p>Friday</p>
            <h4>Cloudy</h4>
          </div>
          <div className="day_degrees day_degrees-first">
            <p>32°</p>
            <span>/</span>
            <p>35°</p>
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
          <div className="day_degrees">
            <p>32°</p>
            <span>/</span>
            <p>35°</p>
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
          <div className="day_degrees">
            <p>32°</p>
            <span>/</span>
            <p>35°</p>
          </div>
        </div>
      </div>
      <style jsx FutureStyles>
        {FutureStyles}
      </style>
    </div>
  )
};

export default Future;