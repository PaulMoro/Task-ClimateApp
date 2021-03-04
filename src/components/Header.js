import React from 'react'

/* Assets */
import bogota from '../../assets/img/bogota.png'
import location from '../../assets/icons/20314.png'
import croquis from '../../assets/img/croquis-bogota.png'

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
        <img className="city_img" src={bogota} alt="image about Bogota"/>
        <div className="city_location">
          <div className="city_location-name">
            <img src={location} alt=""/>
            <h1>Bogotá</h1>
          </div>
          <img className="city_location-img"src={croquis} alt=""/>
        </div>
      </div>
      <style jsx HeaderStyles>
        {HeaderStyles}
      </style>
    </>
  )
};

export default Header;