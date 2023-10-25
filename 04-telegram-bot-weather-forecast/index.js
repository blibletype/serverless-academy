import TelegramBot from 'node-telegram-bot-api';
import {
  showStartMenu,
  showForecastButtons,
  handleSubscription,
} from './handlers.js';
import { buttons } from './keyboard/keyboard-buttons.js';

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, async (ctx) => {
  await showStartMenu(bot, ctx);
});

bot.onText(new RegExp(buttons.menu.forecast), async (ctx) => {
  await showForecastButtons(bot, ctx);
});

bot.onText(new RegExp(buttons.menu.back), async (ctx) => {
  await showStartMenu(bot, ctx);
});

bot.onText(new RegExp(buttons.forecast.ThreeHoursInterval), async (ctx) => {
  await handleSubscription(bot, ctx, 3);
});

bot.onText(new RegExp(buttons.forecast.SixHoursInterval), async (ctx) => {
  await handleSubscription(bot, ctx, 6);
});
