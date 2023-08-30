import readlineSync from 'readline-sync';
import getRandomNumber from './helpers.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const numb = getRandomNumber(1, 100);
    console.log(`Question: ${numb}`);
    const answer = readlineSync.question('Your answer: ');

    if ((numb % 2 === 0) && (answer === 'yes')) {
      console.log('Correct!');
    } else if ((numb % 2 !== 0) && (answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
