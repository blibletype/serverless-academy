const isValidAgeRegex = /^\d{1,3}$/;

export const questions = {
  username: {
    name: 'username',
    message: "Enter the user's name. To cancel press Enter",
    type: 'input',
  },
  gender: {
    name: 'gender',
    message: 'Choose your gender',
    type: 'list',
    choices: ['male', 'female', 'other'],
  },
  age: {
    name: 'age',
    message: 'Enter your age',
    type: 'input',
    filter(input) {
      return new Promise((resolve, reject) => {
        if (!isValidAgeRegex.test(input)) {
          reject('Please provide a valid age');
        }
        resolve(input);
      });
    },
  },
  confirm: {
    name: 'confirm',
    message: 'Want to search for a value in the database?',
    type: 'confirm',
  },
  search: {
    name: 'username',
    message: "Enter the user's name you wanna find in database",
    type: 'input',
  },
};
