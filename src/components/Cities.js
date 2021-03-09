import React, { useState, useEffect } from 'react';
import request from 'superagent';

/* styles */
import CitiesStyles from '../styles/CitiesStyles'

const Cities = () => {
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
        var res = await request.get('https://api.openweathermap.org/data/2.5/weather?zip=01001,us&units=metric&appid=https://api.openweathermap.org/data/2.5/weather?zip=01001,us&units=metric&appid=bb2f48b74892dd07194b9c119ce1ff43')
        var api = res.body;
      } catch (err) {
        console.error(err);
      };
  
      setData(api)
    });
  return(
    <div className="cities">
      <div className="citiesContainer">
        <div className="citiesContainer_data">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
          <div className="citiesContainer_inf">
            <div className="citiesContainer_inf-degrees">
              <p>{data.main.temp}</p>
              <span>°C</span>
            </div>
            <div className="citiesContainer_inf-line"></div>
            <div className="citiesContainer_inf-city">
              <h3>{data.name}</h3>
              <p>{data.sys.country}</p>
            </div>
          </div>
        </div>
        <div className="citiesContainer_weather">
          <h4>Humidity {data.main.humidity}%</h4>
          <h4>Nortwest</h4>
          <h4>{data.main.speed}km/h</h4>
        </div>
      </div>
      <div className="citiesContainer">
        <div className="citiesContainer_data">
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
          <div className="citiesContainer_inf">
            <div className="citiesContainer_inf-degrees">
              <p>{data.main.temp}</p>
              <span>°C</span>
            </div>
            <div className="citiesContainer_inf-line"></div>
            <div className="citiesContainer_inf-city">
              <h3>{data.name}</h3>
              <p>{data.sys.country}</p>
            </div>
          </div>
        </div>
        <div className="citiesContainer_weather">
          <h4>Humidity {data.main.humidity}%</h4>
          <h4>West</h4>
          <h4>{data.main.speed}km/h</h4>
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