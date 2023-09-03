import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  const gameСonditions = [question, rightAnswer];
  return gameСonditions;
};

export default () => engine(rules, generateRound);
