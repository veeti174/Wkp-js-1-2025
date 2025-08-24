'use strict';


const Score = prompt('Input score (0-100)');

function grades(Score) {
  if (Score < 40) {
    return 0;
  }
  else if (Score <= 52) {
    return 1;
  }
  else if (Score <= 64) {
    return 2;
  }
  else if (Score <= 76){
    return 3;
  }
  else if (Score <= 88) {
    return 4;
  }
  else {
    return 5;
  }
}
const grade = grades(Score)

const Answer = `The grade I the great man will grant you is ${grade}`;

document.getElementById('target').innerHTML = Answer;
