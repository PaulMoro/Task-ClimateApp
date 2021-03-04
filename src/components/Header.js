import React, { useState, useEffect } from 'react';
import request from 'superagent'

/* Assets */
import bogota from '../../assets/img/bogota.png'
import location from '../../assets/icons/20314.png'
import croquis from '../../assets/img/croquis-bogota.png'

/* styles */
import HeaderStyles from '../styles/HeaderStyles'


const Header = () => {
  const [data, setData] = useState({
  "coord": {
    "lon": -74.0817,
    "lat": 4.6097
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 13,
    "feels_like": 12.62,
    "temp_min": 13,
    "temp_max": 13,
    "pressure": 1027,
    "humidity": 88
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.03,
    "deg": 0
  },
  "clouds": {
    "all": 75
  },
  "dt": 1614833718,
  "sys": {
    "type": 1,
    "id": 8582,
    "country": "CO",
    "sunrise": 1614769630,
    "sunset": 1614812974
  },
  "timezone": -18000,
  "id": 3688689,
  "name": "",
  "cod": 200
  });
  useEffect(async () => {
    try {
      var res = await request.get('http://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=bb2f48b74892dd07194b9c119ce1ff43')
      var api = res.body;
    } catch (err) {
      console.error(err);
    };

    setData(res.body)
  });

  return(
    <>
      <div className="weather">
        <div className="weather_desing-top"></div>
        <div className="weather_desing-bottom"></div>
        <div className="weather_how">
          <img src={'http://openweathermap.org/img/wn/04n@2x.png'} alt=""/>
          <p>{data.weather.description}</p>
        </div>
        <div className="weather_howMuch">
          <p>{data.main.temp}</p>
          <span>°C</span>
        </div>
        <div className="weather_desing-top2"></div>
        <div className="weather_desing-bottom2"></div>
      </div>
      <div className="city">
        <img className="city_img" src={bogota} alt="image about Bogota"/>
        <div className="city_location">
          <div className="city_location-name">
            <img src={location} alt=""/>
            <h1>{data.name}</h1>
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