
import React from 'react';
import { WeatherData } from 'store/redux/weather/types';
import { Card, CardContent, CardTitle, CardDescription, CardImage, CardButton } from './styles';

type CardWeatherProps = {
  data: WeatherData;
  onDelete: (city: string) => void;
};

const CardWeather: React.FC<CardWeatherProps> = ({ data, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>{data.city}</CardTitle>
        <CardImage
          src={`http://openweathermap.org/img/w/${data.icon}.png`}
          alt={data.description}
        />
        <CardDescription>{data.description}</CardDescription>
        <CardDescription>Temperature: {data.temperature}°C</CardDescription>
        <CardButton onClick={() => onDelete(data.city)}>Delete</CardButton>
      </CardContent>
    </Card>
  );
};

export default CardWeather;
