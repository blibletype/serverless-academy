const { uniqueValues, existInAllFiles, existInAtleastTen } = require('./utils');

console.time('Summary');
console.log('uniqueValues: ' + uniqueValues());
console.log('existInAllFiles: ' + existInAllFiles());
console.log('existInAtleastTen: ' + existInAtleastTen());
console.timeEnd('Summary');
