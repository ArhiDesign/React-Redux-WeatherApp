import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherCardData } from './types';

interface WeatherState {
  history: WeatherCardData[];
}

const initialState: WeatherState = {
  history: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherCard: (state, action: PayloadAction<WeatherCardData>) => {
      state.history.push(action.payload);
    },
    deleteWeatherCard: (state, action: PayloadAction<number>) => { 
      state.history = state.history.filter((card) => card.id !== action.payload);
    },
    clearWeatherHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addWeatherCard, deleteWeatherCard, clearWeatherHistory } = weatherSlice.actions;
export default weatherSlice

