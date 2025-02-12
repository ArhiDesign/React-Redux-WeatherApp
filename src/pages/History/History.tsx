import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { deleteAllWeather, deleteWeather } from 'store/redux/weather/WeatherSlice';
import CardWeather from '../../components/CardWeather/CardWeather';
import  Button  from '../../components/Button/Button';



const History: React.FC = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather.weather);

  const handleDeleteWeather = (city: string) => {
    dispatch(deleteWeather(city));
  };

  const handleDeleteAllWeather = () => {
    dispatch(deleteAllWeather());
  };

  return (
    <div>
      <h1>Weather App</h1>
      {weather.length > 0 && (
        <Button name="Delete all cards" onClick={handleDeleteAllWeather} />
      )}
      <div>
        {weather.map((weatherData: unknown) => (
          <CardWeather
            key={weatherData.city}
            data={weatherData}
            onDelete={handleDeleteWeather}
          />
        ))}
      </div>
    </div>
  );
};

export default History;