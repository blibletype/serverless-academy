const { readFiles } = require('./utils/fs');
const { uniqueValues } = require('./utils/uniqueValues');
const { existInAllFiles } = require('./utils/existInAllFiles');
const { existInAtleastTen } = require('./utils/existInAtleastTen');

//try use worker threads

(async () => {
  console.time('Summary');
  const data = await readFiles();
  console.log('uniqueValues: ' + uniqueValues(data));
  console.log('existInAllFiles: ' + existInAllFiles(data));
  console.log('existInAtleastTen: ' + existInAtleastTen(data));
  console.timeEnd('Summary');
})();
