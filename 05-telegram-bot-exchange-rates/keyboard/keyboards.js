import { buttons } from './keyboard-buttons.js';

export const keyboards = {
  home: {
    resize_keyboard: true,
    keyboard: [[buttons.menu.forecast], [buttons.menu.currency]],
  },
  forecast: {
    resize_keyboard: true,
    keyboard: [
      [buttons.forecast.ThreeHoursInterval, buttons.forecast.SixHoursInterval],
      [buttons.menu.back],
    ],
  },
  currency: {
    resize_keyboard: true,
    keyboard: [
      [buttons.currency.USD, buttons.currency.EUR],
      [buttons.menu.back],
    ],
  },
};
