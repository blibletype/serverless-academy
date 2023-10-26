export const buttons = {
  menu: {
    forecast: 'Weather Forecast 🌦️',
    currency: 'Exchange Rates 💸',
    back: 'Back ◀️',
  },
  forecast: {
    ThreeHoursInterval: 'at intervals of 3 hours',
    SixHoursInterval: 'at intervals of 6 hours',
  },
  currency: {
    USD: 'USD',
    EUR: 'EUR',
  },
  getAllCurrencyButtonsRegex() {
    const allCurrencies = [];
    for (const property in this.currency) {
      allCurrencies.push(this.currency[property]);
    }
    return new RegExp(`(${allCurrencies.join('|')})`);
  },
};
