export interface WeatherData {
  city: string
  temperature: number
  description: string
  icon: string
}

export interface CardWeatherProps {
  weatherData: WeatherData
}
