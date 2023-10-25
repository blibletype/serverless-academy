import { buttons } from './keyboard-buttons.js';

export const keyboards = {
  home: {
    resize_keyboard: true,
    keyboard: [[buttons.menu.forecast]],
  },
  forecast: {
    resize_keyboard: true,
    keyboard: [
      [buttons.forecast.ThreeHoursInterval, buttons.forecast.SixHoursInterval],
      [buttons.menu.back],
    ],
  },
};
