import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumb = getRandomNumber(1, 100);
  const secondNumb = getRandomNumber(1, 100);
  const question = `${firstNumb} ${secondNumb}`;

  let operationResult;
  const lowerNumb = firstNumb < secondNumb ? firstNumb : secondNumb;
  for (let i = 1; i <= lowerNumb; i += 1) {
    if ((firstNumb % i === 0) && (secondNumb % i === 0)) {
      operationResult = i;
    }
  }

  const rightAnswer = String(operationResult);
  const gameСonditions = [question, rightAnswer];
  return gameСonditions;
};

export default () => engine(rules, generateRound);