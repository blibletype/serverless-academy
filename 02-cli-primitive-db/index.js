import inquirer from 'inquirer';
import { create, findAll } from './database.js';
import { questions } from './questions.js';

const ask = async () => {
  const user = await inquirer.prompt(questions.username);

  if (!user.username) return search();

  Object.assign(user, await inquirer.prompt(questions.gender));
  Object.assign(user, await inquirer.prompt(questions.age));

  await create(user);

  ask();
};

const search = async () => {
  const answer = await inquirer.prompt(questions.confirm);

  if (!answer.confirm) return console.log('bye-bye');

  const data = await findAll();

  console.log(data);

  const search = await inquirer.prompt(questions.search);

  const result = data.filter(
    (user) => user.username.toLowerCase() === search.username.toLowerCase()
  );

  if (result.length === 0)
    return console.log(`User with username ${search.username} not found`);

  console.log(result);
};

ask();
