import { useState } from "react";
import "./weather.css";

function Weather() {
  // const apiKey = import.meta.env.WEATHER_API_KEY;
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = () => {
    console.log(city);
    // const url = ``;

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <section>
      <h1>Weather</h1>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={getWeather}>Get Weather</button>
      <div id="weatherInfo"></div>
    </section>
  );
}

export default Weather;
