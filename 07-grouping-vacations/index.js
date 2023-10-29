import { readFileSync, writeFileSync } from 'fs';
import { proccessData } from './utils.js';

try {
  const data = readFileSync('./data.json');
  const parsedData = JSON.parse(data);
  const result = proccessData(parsedData);
  writeFileSync('./output.json', JSON.stringify(result, null, 2));
} catch (error) {
  console.log(error);
}
