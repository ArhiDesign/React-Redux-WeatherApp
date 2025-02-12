export interface WeatherData {
    temperature: number;
    humidity: number;
    windSpeed: number;
    description: string;
  }
  
  export interface HomeProps {
    searchCity: (city: string) => void;
    weather: WeatherData | null;
    error: string | null;
  }
  