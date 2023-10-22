import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Sorter } from './Sorter.js';

const welcomeMessage =
  '\nHi, homie.\nPlease enter some words or digits dividing them with spaces:\n';

const sortingTypesMessage = `
How would you like to sort values?

  1. Sort words alphabetically
  2. Sort numbers from lesser to greater
  3. Sort numbers from bigger to smaller
  4. Sort words by quantity of letters
  5. Show only unique words
  6. Show only unique values from the set of words and numbers

You can type 'exit' any time to close this super-dooper sorter
Select (1 - 5) and press 'ENTER':
`;

const rl = readline.createInterface({ input, output });

const isExit = (input) => input === 'exit';

rl.on('close', () => {
  console.log('bye-bye');
});

(async function loop() {
  const data = await rl.question(welcomeMessage);

  if (isExit(data)) return rl.close();

  const sorter = new Sorter(data.split(' '));

  const sortedType = await rl.question(sortingTypesMessage);

  if (isExit(sortedType)) return rl.close();

  sorter.sort(sortedType);

  loop();
})();
