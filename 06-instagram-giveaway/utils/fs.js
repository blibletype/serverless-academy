const fs = require('fs');
const { join } = require('path');

const dataPath = join(__dirname, '..', 'data');

const readFiles = async () => {
  const data = [];
  const filesPaths = fs.readdirSync(dataPath);

  for (const filePath of filesPaths) {
    const content = fs
      .readFileSync(join(dataPath, filePath), { encoding: 'utf8' })
      .split('\n');

    data.push(content);
  }
  return data;
};

module.exports = { readFiles };
