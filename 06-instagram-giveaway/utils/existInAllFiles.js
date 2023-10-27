const { existInFiles } = require('./existInFiles');

const existInAllFiles = (data) => {
  console.time('existInAllFiles');

  const result = [];

  const map = existInFiles(data);

  map.forEach((value, key) => {
    if (value === 20) result.push(key);
  });

  console.timeEnd('existInAllFiles');

  return result.length;
};

module.exports = { existInAllFiles };
