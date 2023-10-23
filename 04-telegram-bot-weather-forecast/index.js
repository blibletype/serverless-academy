import TelegramBot from 'node-telegram-bot-api';
import {
  showStartMenu,
  showForecastButtons,
  handleCallback,
} from './handlers.js';

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, async (ctx) => {
  await showStartMenu(bot, ctx);
});

bot.onText(/Weather Forecast 🌦️/, async (ctx) => {
  await showForecastButtons(bot, ctx);
});

bot.on('callback_query', async (ctx) => {
  await handleCallback(bot, ctx);
  await bot.answerCallbackQuery(ctx.id);
});
