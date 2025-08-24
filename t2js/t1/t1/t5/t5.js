'use strict';

const The_intgr = +prompt('Gimme a positive integer ');
const base = +prompt('Enter starting number')

let sum = 0;
let numbers = [];

for (let i = base; i <= The_intgr; i++) {
  sum += i;
  numbers.push(i);
  console.log(i);
}

document.querySelector('#Target').innerHTML =
 `Natural numbers sum is tai se summa  ${sum}`;
