import React from 'react'

/* styles */
import HeaderStyles from '../styles/HeaderStyles'


const Header = () => {
  return(
    <>
      <div className="weather">
        <div className="weather_desing-top"></div>
        <div className="weather_desing-bottom"></div>
        <div className="weather_how">
          <img src="" alt=""/>
          <p>Cloudy</p>
        </div>
        <div className="weather_howMuch">
          <p>31</p>
          <span>°C</span>
        </div>
      </div>
      <div className="city">
        <img src="" alt=""/>
        <div className="city_location">
          <div className="city_location-name">
            <img src="" alt=""/>
            <h1>Bogotá</h1>
          </div>
          <img src="" alt=""/>
        </div>
      </div>
      <style jsx HeaderStyles>
        {HeaderStyles}
      </style>
    </>
  )
};

export default Header;