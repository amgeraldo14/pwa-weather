import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '52b00d538055a0cf5cd2831574951161'

export const fetchWeather = async(query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: 'metric',
        APPID: API_KEY
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}