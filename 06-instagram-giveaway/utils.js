const fs = require('fs');
const { join } = require('path');

const dataPath = join(__dirname, 'data');
const filesPaths = fs.readdirSync(dataPath);

const map = new Map();

for (const filePath of filesPaths) {
  const data = fs
    .readFileSync(join(dataPath, filePath), { encoding: 'utf8' })
    .split('\n');

  const uniqueValues = new Set(data);
  for (const item of uniqueValues) {
    let counter = map.get(item) ?? 0;
    map.set(item, ++counter);
  }
}

const uniqueValues = () => {
  return map.size;
};

const existInAllFiles = () => {
  return [...map.values()].filter((value) => value === 20).length;
};

const existInAtleastTen = () => {
  return [...map.values()].filter((value) => value >= 10).length;
};

module.exports = { uniqueValues, existInAllFiles, existInAtleastTen };
