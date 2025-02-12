import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData } from "store/redux/weather/WeatherSlice"; 
import { fetchWeather } from "store/redux/weather/WeatherSlice"; 
import { RootState } from "@reduxjs/toolkit/query"; 
import { Link } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const weatherHistory = useSelector((state: RootState) => state.weather.history);

  const handleSearch = useCallback(async () => {
    if (!city.trim()) {
      alert("Введите название города");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeather(city);
      if (!weatherData) throw new Error("Данные о погоде не получены");
      dispatch(addWeatherData(weatherData));
    } catch (err) {
      setError("Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  }, [city, dispatch]);

  return (
    <div>
      <h1>Weather App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/history">History</Link>
      </nav>
      <input 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Введите город" 
      />
      <button onClick={handleSearch} disabled={loading}>Search</button>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherHistory.length > 0 && (
        <div>
          <h2>Последний результат</h2>
          <p>Город: {weatherHistory[weatherHistory.length - 1].name}</p>
          <p>Температура: {weatherHistory[weatherHistory.length - 1].main.temp}°C</p>
          <img 
            src={`http://openweathermap.org/img/w/${weatherHistory[weatherHistory.length - 1].weather[0].icon}.png`} 
            alt="Иконка погоды"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
