const { existInFiles } = require('./existInFiles');

const existInAtleastTen = (data) => {
  console.time('existInAllFiles');

  const result = [];

  const map = existInFiles(data);

  map.forEach((value, key) => {
    if (value >= 10) result.push(key);
  });

  console.timeEnd('existInAllFiles');

  return result.length;
};

module.exports = { existInAtleastTen };
