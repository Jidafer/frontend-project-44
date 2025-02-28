import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 69696969696969696969696969696969;
const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(minRange, maxRange);
  const num2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = ${num1} ${operator} ${num2};
  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};