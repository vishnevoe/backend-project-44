import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const firstElem = getRandomNumber(1, 50);
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 20);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const elemProgression = firstElem + progressionStep * i;
    progression.push(elemProgression);
  }

  const indexOfDeletedElement = getRandomNumber(0, progressionLength - 1);
  const deletedElement = progression[indexOfDeletedElement];
  progression[indexOfDeletedElement] = '..';

  const question = progression.join(', ');

  const rightAnswer = String(deletedElement);
  const gameСonditions = [question, rightAnswer];
  return gameСonditions;
};

export default () => engine(rules, generateRound);
