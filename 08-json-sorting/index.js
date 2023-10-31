const domain = 'http://localhost:3000'; //https://jsonbase.com

const endpoints = [
  '/sls-team/json-793',
  '/sls-team/json-955',
  '/sls-team/json-231',
  '/sls-team/json-931',
  '/sls-team/json-93',
  '/sls-team/json-342',
  '/sls-team/json-770',
  '/sls-team/json-491',
  '/sls-team/json-281',
  '/sls-team/json-718',
  '/sls-team/json-310',
  '/sls-team/json-806',
  '/sls-team/json-469',
  '/sls-team/json-258',
  '/sls-team/json-516',
  '/sls-team/json-79',
  '/sls-team/json-706',
  '/sls-team/json-521',
  '/sls-team/json-350',
  '/sls-team/json-64',
];

const findKeyInObj = (object, key) => {
  for (const property in object) {
    if (property === key) return object[property];

    if (
      typeof object[property] === 'object' &&
      !Array.isArray(object[property]) &&
      object[property] !== null
    ) {
      const result = findKeyInObj(object[property], key);
      if (result !== undefined) return result;
    }

    if (Array.isArray(object[property])) {
      for (const element of object[property]) {
        const result = findKeyInObj(element, key);
        if (result !== undefined) return result;
      }
    }
  }
};

const fetchWithAttemps = async (url, n) => {
  try {
    if (n > 0) {
      const res = await fetch(url);
      if (res.status !== 200) return fetchWithAttemps(url, --n);
      return await res.json();
    }
  } catch (error) {
    return fetchWithAttemps(url, --n);
  }
};

(async () => {
  const res = [];
  for (const endpoint of endpoints) {
    const url = domain + endpoint;
    const data = await fetchWithAttemps(url, 3);
    const isDone = findKeyInObj(data, 'isDone');
    res.push(isDone);
    const isSuccess = typeof isDone === 'boolean' ? '[Success]' : '[Fail]';
    console.log(
      isSuccess,
      `${url}:`,
      typeof isDone === 'boolean'
        ? `isDone - ${isDone}`
        : 'The endpoint is unavailable'
    );
  }
  console.log('\nFound True values:', res.filter((val) => val).length);
  console.log('Found False values:', res.filter((val) => !val).length);
})();
