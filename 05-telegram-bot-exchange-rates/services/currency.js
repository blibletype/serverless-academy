import NodeCache from 'node-cache';
import axios from 'axios';
const cache = new NodeCache({ stdTTL: 600 });

const monobankApiUri = 'https://api.monobank.ua/bank/currency';
const privatApiUri =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11';

const currencies = {
  USD: 840,
  EUR: 978,
  UAH: 980,
};

export const getExchangeRates = async (currency) => {
  try {
    const monobankData = await getMonobankData(currencies[currency]);
    const privatbankData = await getPrivatbankData(currency);

    const monoRateBuy = parseFloat(monobankData.rateBuy).toFixed(2);
    const monoRateSell = parseFloat(monobankData.rateSell).toFixed(2);
    const privatRateBuy = parseFloat(privatbankData.buy).toFixed(2);
    const privatRateSell = parseFloat(privatbankData.sale).toFixed(2);

    return (
      'Exchange Rates\n\n' +
      `Monobank:\nbuy: ${monoRateBuy} ґриунів\nsell: ${monoRateSell} ґриунів\n\n` +
      `Privat24:\nbuy: ${privatRateBuy} ґриунів\nsell: ${privatRateSell} ґриунів`
    );
  } catch (error) {
    return 'Something went wrong. Please try later...';
  }
};

const getMonobankData = async (currency) => {
  let data;
  try {
    const res = await axios.get(monobankApiUri);
    if (res.status !== 200) throw new Error();
    data = res.data;
    cache.set('monobankData', data);
  } catch (error) {
    if (!cache.has('monobankData')) throw new Error();
    data = cache.get('monobankData');
  }
  return data.filter(
    (rate) =>
      rate.currencyCodeA === currency && rate.currencyCodeB === currencies.UAH
  )[0];
};

const getPrivatbankData = async (currency) => {
  let data;
  try {
    const res = await axios.get(privatApiUri);
    if (res.status !== 200) throw new Error();
    data = res.data;
    cache.set('privatbankData', data);
  } catch (error) {
    if (!cache.has('privatbankData')) throw new Error();
    data = cache.get('privatbankData');
  }
  return currency === 'EUR' ? data[0] : data[1];
};
