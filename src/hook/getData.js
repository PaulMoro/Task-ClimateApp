/* This page don't use because have bugs, they need this fast */


/* import { useState, useEffect } from 'react';
let key = bb2f48b74892dd07194b9c119ce1ff43;
const api = `http://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&appid=${key}`;



const getData = () => {
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
      let code = res.weather
    } catch (err) {
      console.error(err);
    };

    setData(api)
  });

  return data;
}


export default getData */ 