import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return numb !== 1;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameСonditions = [question, rightAnswer];
  return gameСonditions;
};

export default () => engine(rules, generateRound);
