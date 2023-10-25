import axios from 'axios';

const API_KEY = process.env.API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/forecast?';

export const getForecast = async (city) => {
  try {
    const res = await axios.get(
      `${URL}appid=${API_KEY}&q=${city}&cnt=1&units=metric`
    );
    return prettifyForecast(res.data.list[0]);
  } catch (error) {
    console.log(error);
  }
};

const prettifyForecast = (data) => {
  const temp = Math.floor(+data.main.temp);
  const { main, description } = data.weather[0];
  const wind = data.wind.speed;
  return `${main}\n${description}\nTemp: ${temp}°C\nWind: ${wind} m/s`;
};
