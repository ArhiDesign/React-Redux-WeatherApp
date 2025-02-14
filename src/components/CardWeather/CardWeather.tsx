import React from "react"
import {
  CardContainer,
  CityName,
  Temperature,
  IconContainer,
  Icon,
  CityInfo,
} from "./styles"
import { CardWeatherProps } from "./types"

function CardWeather({ weatherData }: CardWeatherProps) {
  return (
    <CardContainer>
      <CityInfo>
        <Temperature>
          {Math.round(weatherData.temperature - 273.15)}°C
        </Temperature>
        <CityName>{weatherData.city}</CityName>
      </CityInfo>

      <IconContainer>
        <Icon
          src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
          alt="Weather icon"
        />
        <Icon
          src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
          alt="Weather icon"
        />
        <Icon
          src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
          alt="Weather icon"
        />
      </IconContainer>
    </CardContainer>
  )
}

export default CardWeather
