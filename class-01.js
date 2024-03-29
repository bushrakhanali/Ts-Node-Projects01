#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1); // Apply one of the maths condition.
const answer = await inquirer.prompt([
    {
        name: 'userGuessNumber',
        type: 'number',
        message: 'Kindly Enter Your Guess Number b/w 1 - 10.',
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log('Congratulations!! You gussed correct number.');
}
else {
    console.log('You gussed wrong number plz try again.');
}
console.log(answer);
//                                   ---x-x-x-x-x-x-x-x---
