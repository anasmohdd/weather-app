import React , {useState} from "react";
import axios from 'axios'
import '../index.css'

function Apps({ setWeatherData , setUnit, unit}) {
    // const[datas, setData] = useState({})

    const[city, setCity] = useState('')
    // const[unit, setUnit] = useState('metric'); // metric for Celsius, imperial for Fahrenheit
    const apiKey = '9ba3bf97d3ac164fdf73cb04ddf33423';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
  
    const handleSearch = async () => {
      try{
        if(!city){
          window.alert('Enter The City')
        }else{
          const response = await axios.get(url);
          setWeatherData(response.data);
          setCity('')
        }
      }catch(error){
          window.alert("Enter The Correct Name")
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      }
    }

    const handleUnitChange = (selectedUnit) => {
      setUnit(selectedUnit); // Update the unit state when the radio input changes
    }

return(

    <>
    <div className="search">

     <div className="inputf">
     <input
     type="text"
     value={city}
     onChange={(e)=> setCity(e.target.value)}
    //  onKeyPress ={searchLocation}
     placeholder="Enter Location"/>
     </div>
     
    
        <div className="cel">
        <input
          type="radio"
          value="metric"
          checked={unit === 'metric'}
          onClick={handleSearch}
          onChange={() => handleUnitChange('metric')}
        />
        Celsius

        <input
          type="radio"
          value="imperial"
          checked={unit === 'imperial'}
          onClick={handleSearch}
          onChange={() => handleUnitChange('imperial')}
        />
        Fahrenheit
        </div>
    
       <div className="btn">
        <button className="button-86" onClick={handleSearch}>Search</button> 
       </div>

     </div>
     </>
     
  )
}
export default Apps;
