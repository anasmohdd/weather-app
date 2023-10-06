import React from 'react';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';
import '../index.css'


function Weather({ data , unit }) {

  const temperatureUnit = unit === 'metric' ? '°C' : '°F' ;

  return (
    <>

  <div className="container">
      <div className="top">
            <div className="locationn">
              <p className='size'>{data.name}, {data.sys.country}</p>
            </div>
            <div className="temp">
            <WiThermometer className='athem' fontSize="4rem" /><h1>{`${data.main.temp.toFixed()} ${temperatureUnit}`}</h1>
            </div>
            <div className="description">
            <img
            className='ab'
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}/>   
            <p> {data.weather[0].description}</p>
            </div>
            {/* bcz weather is in array of an object with id */}
      </div>
      {/* { data.name !== undefined && */}
      <div className="bottom">
            <div className="feels">
            <p className="bold">{`${data.main.feels_like.toFixed()} ${temperatureUnit}`}</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
            <WiHumidity className='a' color="white"fontSize="2rem"/><p className="bold">{data.main.humidity.toFixed()}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
            <WiStrongWind className='a' color="white" fontSize="2rem"/><p className="bold">{data.wind.speed} m/s</p>
              <p>Wind Speed</p>
            </div>
      </div>
      {/* } */}
    </div>

    </>
  )}

export default Weather;
