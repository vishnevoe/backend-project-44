import getRandomNumber from '../helpers.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomNumber(1, 100);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  const gameСonditions = [rules, question, rightAnswer];
  return gameСonditions;
};
