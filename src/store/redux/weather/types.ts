export type WeatherData = {
    city: string;
    temperature: number;
    description: string;
    icon: string;
  };
  
  export type WeatherState = {
    weather: WeatherData[];
    loading: boolean;
    error: string | null;
  };