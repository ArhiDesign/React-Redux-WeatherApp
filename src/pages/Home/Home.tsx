import { useState } from "react"
import axios from "axios"

import { HomeContainer, FormContainer } from "./styles"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Spinner from "components/Spinner/Spinner"
import CardWeather from "../../components/CardWeather/CardWeather"
import CardError from "../../components/CardError/CardError"
import { useAppDispatch } from "../../store/hooks"
import { addWeatherCard } from "store/redux/WeatherSl/weatherSlice"
import { WeatherCardData } from "./types"

const API_KEY = "acadc9340e26d3a6d841ca9d471a664d"

function Home() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState<WeatherCardData | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleSearch = async () => {
    if (!city) return
    setLoading(true)
    setError("")
    setWeatherData(null)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      )
      const data = response.data
      const weatherCardData: WeatherCardData = {
        id: data.id,
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        timestamp: new Date().toISOString(),
      }
      setWeatherData(weatherCardData)
      dispatch(addWeatherCard(weatherCardData))
    } catch (err: any) {
      setError("City not found or error fetching data.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <HomeContainer>
      <FormContainer>
        <Input
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <Button onClick={handleSearch}>Search</Button>
      </FormContainer>
      {loading && <Spinner />}
      {weatherData && !error && <CardWeather weatherData={weatherData} />}
      {error && <CardError message={error} />}
    </HomeContainer>
  )
}

export default Home
