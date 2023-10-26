import { getForecast } from './services/weather.js';
import { getExchangeRates } from './services/currency.js';
import { keyboards } from './keyboard/keyboards.js';

const city = 'Kyiv';

let timer = 0;

export const showStartMenu = async (bot, ctx) => {
  await bot.sendMessage(
    ctx.chat.id,
    'Hello, please choose an option from keyboard',
    {
      reply_markup: keyboards.home,
    }
  );
};

export const showForecastButtons = async (bot, ctx) => {
  await bot.sendMessage(ctx.chat.id, `Forecast in ${city}`, {
    reply_markup: keyboards.forecast,
  });
};

export const handleSubscription = async (bot, ctx, interval) => {
  if (timer) {
    unsubscribeFromForecast();
    await bot.sendMessage(
      ctx.chat.id,
      `Successfully unsubscribed from weather forecast with interval ${interval}h`
    );
  } else {
    subscribeToForecast(bot, ctx, interval);
    await bot.sendMessage(
      ctx.chat.id,
      `Successfully subscribed to weather forecast with interval ${interval}h`
    );
  }
};

const subscribeToForecast = (bot, ctx, interval) => {
  timer = setInterval(async () => {
    await bot.sendMessage(ctx.chat.id, await getForecast(city));
  }, 1000 * 60 * 60 * interval);
};

const unsubscribeFromForecast = () => {
  clearInterval(timer);
  timer = 0;
};

export const showCurrencyButtons = async (bot, ctx) => {
  await bot.sendMessage(ctx.chat.id, 'Please choose an option', {
    reply_markup: keyboards.currency,
  });
};

export const handleExchangeRates = async (bot, ctx) => {
  // console.log(await getExchangeRates(ctx.text));
  await bot.sendMessage(ctx.chat.id, await getExchangeRates(ctx.text));
};
