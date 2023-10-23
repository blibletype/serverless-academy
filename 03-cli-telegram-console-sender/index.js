import TelegramBot from 'node-telegram-bot-api';
import { Command } from 'commander';

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const program = new Command();

program
  .command('send-message')
  .argument('<message>', 'message to send')
  .description('Send message from Telegram bot')
  .alias('m')
  .action(async (message) => {
    await bot.sendMessage(CHAT_ID, message);
    process.exit(0);
  });

program
  .command('send-photo')
  .argument('<path>', 'path to photo')
  .description('Send photo from Telegram bot')
  .alias('p')
  .action(async (path) => {
    await bot.sendPhoto(CHAT_ID, path);
    process.exit(0);
  });

program.parse();
