import React from "react"
import { HistoryContainer, CardsGrid, ClearButton } from "./styles"
import CardWeather from "../../components/CardWeather/CardWeather"
import Button from "../../components/Button/Button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { clearWeatherHistory } from "store/redux/WeatherSl/weatherSlice"

import { WeatherCardData } from "pages/Home/types"

function History() {
  const history = useAppSelector(state => state.weather.history)
  const dispatch = useAppDispatch()

  const handleClear = () => {
    dispatch(clearWeatherHistory())
  }

  return (
    <HistoryContainer>
      <CardsGrid>
        {history.map((weather: WeatherCardData) => (
          <CardWeather key={weather.id} weatherData={weather} />
        ))}
      </CardsGrid>
      {history.length > 0 && (
        <ClearButton onClick={handleClear}>Delete all cards</ClearButton>
      )}
    </HistoryContainer>
  )
}

export default History
