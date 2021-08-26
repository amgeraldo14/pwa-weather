import { useState, useEffect } from 'react'
import { fetchWeather } from './api/fetchWeather'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})
  const search = async (e) => {
    if (e.key === 'Enter') {
      console.log('masuk if e.key')
      const data = await fetchWeather(query)
      if (data) {
        setWeather(data)
      }
      setQuery('')
    }
  }

  useEffect(() => {
    console.log(weather)
  }, [weather])


  return (
    <div className="main-container">
      {/* <h1 className="title">WEATHER APP</h1> */}
      <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            { Math.round(weather.main.temp) }
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App