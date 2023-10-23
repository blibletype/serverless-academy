const city = 'Kyiv';
const API_KEY = process.env.API_KEY;
import axios from 'axios';

export const showStartMenu = async (bot, ctx) => {
  await bot.sendMessage(
    ctx.chat.id,
    'Hello, please choose an option from keyboard',
    {
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: [['Weather Forecast 🌦️']],
      },
    }
  );
};

export const showForecastButtons = async (bot, ctx) => {
  await bot.sendMessage(ctx.chat.id, `Forecast in ${city}`, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'at intervals of 3 hours', callback_data: '3' },
          { text: 'at intervals of 6 hours', callback_data: '6' },
        ],
      ],
    },
  });
};

export const handleCallback = async (bot, ctx) => {
  if (ctx.data === '3' || ctx.data === '6') {
    const forecast = await getForecast(ctx.data);
    const temp = Math.floor(+forecast.main.temp);
    const { main, description } = forecast.weather[0];
    const wind = forecast.wind.speed;
    await bot.sendMessage(
      ctx.message.chat.id,
      `${main}\n${description}\nTemp: ${temp}°C\nWind: ${wind} m/s`
    );
  }
};

const getForecast = async (interval) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&cnt=3&units=metric`
    );
    if (interval === '3') return res.data.list[1];
    if (interval === '6') return res.data.list[2];
  } catch (error) {
    console.log(error);
  }
};
