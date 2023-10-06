import React, { useState } from 'react';
import './index.css';
import SearchBar from './components/SearchBar'
import Weather from './components/Weather';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric');

  return (
    <>
    <div className="App">
      <h2 className='heading'>Weather Dashboard</h2>
    </div>
      <SearchBar setWeatherData={setWeatherData} setUnit={setUnit} unit={unit}/>
      {weatherData && <Weather data={weatherData} unit={unit}/>}
      </>
  );
}

export default App;
