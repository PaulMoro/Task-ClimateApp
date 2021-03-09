import React, { useState, useEffect } from 'react';
import request from 'superagent'

/* styles */
import FutureStyles from '../styles/FutureStyles'

const Future = () => {
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
    "name": "Bogotaaa",
    "cod": 200
    });
    useEffect(async () => {
      try {
        var res = await request.get('https://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=https://api.openweathermap.org/data/2.5/weather?zip=01001,us&units=metric&appid=a967ec6d970677bf478e5f73d840390c')
        var api = res.body;
      } catch (err) {
        console.error(err);
      };
      setData(api)
    });

  return(
    <div className="future">
      <div className="title">
        <h2>3 Days</h2>
        <p>Forecast</p>
      </div>
      <div className="day">
        <div className="day_weather">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
          <div className="day_weather-precise">
            <p>Friday</p>
            <h4>{data.weather[0].description}</h4>
          </div>
          <div className="day_degrees day_degrees-first">
            <p>{data.main.temp_min}°</p>
            <span>/</span>
            <p>{data.main.temp_max}°</p>
          </div>
        </div>
      </div>
      <div className="day">
        <div className="day_weather">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
          <div className="day_weather-precise">
            <p>Friday</p>
            <h4>{data.weather[0].description}</h4>
          </div>
          <div className="day_degrees">
            <p>{data.main.temp_min}°</p>
            <span>/</span>
            <p>{data.main.temp_max}°</p>
          </div>
        </div>
      </div>
      <div className="day">
        <div className="day_weather">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
          <div className="day_weather-precise">
            <p>Friday</p>
            <h4>{data.weather[0].description}</h4>
          </div>
          <div className="day_degrees">
            <p>{data.main.temp_min}°</p>
            <span>/</span>
            <p>{data.main.temp_max}°</p>
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