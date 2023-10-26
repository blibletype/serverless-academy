import { readFile, writeFile } from 'fs/promises';

const FILE_PATH = 'test.txt';

export const findAll = async () => {
  try {
    const users = [];
    const data = await readFile(FILE_PATH, { encoding: 'utf8' });

    for (const row of data.split('\n')) {
      if (!row) break;
      users.push(JSON.parse(row));
    }

    return users;
  } catch (error) {
    console.log('Database empty, please add some users first\n', error);
  }
};

export const create = async (data) => {
  try {
    await writeFile(FILE_PATH, JSON.stringify(data) + '\n', {
      encoding: 'utf8',
      flag: 'a',
    });
  } catch (error) {
    console.log(error);
  }
};
