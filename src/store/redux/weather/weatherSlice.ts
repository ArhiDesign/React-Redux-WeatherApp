import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherState, WeatherData } from './types';

const initialState: WeatherState = {
  weather: [],
  loading: false,
  error: null,
};

// Thunk для получения данных о погоде
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acadc9340e26d3a6d841ca9d471a664d`
    );
    const data = await response.json();
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.weather.push(action.payload);
    },
    deleteAllWeather: (state) => {
      state.weather = [];
    },
    deleteWeather: (state, action) => {
      state.weather = state.weather.filter(
        (item) => item.city !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.push(action.payload);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { addWeatherData, deleteAllWeather, deleteWeather } = weatherSlice.actions;

export default weatherSlice.reducer