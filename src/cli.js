import readlineSync from 'readline-sync';

export default  () => {
console.log ('node bin/brain-games.js\nWelcome to the Brain Games!');
const name = readlineSync.question('May I have your name?') ;
 console.log (`Hello, ${name}!`)} ;