import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const operations = ['+', '-', '*'];
  const randomOperation = getRandomNumber(0, 2);
  const operator = operations[randomOperation];
  const question = `${operand1} ${operator} ${operand2}`;
  let operationResult;
  switch (operator) {
    case '+':
      operationResult = operand1 + operand2;
      break;
    case '-':
      operationResult = operand1 - operand2;
      break;
    case '*':
      operationResult = operand1 * operand2;
      break;
    default:
      console.log(`No such operator ${operator}`);
  }
  const rightAnswer = String(operationResult);
  const gameСonditions = [question, rightAnswer];
  return gameСonditions;
};

export default () => engine(rules, generateRound);
