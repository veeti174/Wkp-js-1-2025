'use strict';


const Score = prompt('Input score (0-100)');

function grades(score) {
  if (Score < 40) {
    return 0;
  }
  elif (Score <= 52) {
    return 1;
  }
  elif (Score <= 64) {
    return 2;
  }
  elif (Score <= 76){
    return 3;
  }
  elif (Score <= 88) {
    return 4;
  }
  else {
    return 5;
  }
}
const DegreeF = (DegreeC * 9) / 5 + 32;

const DegreeK = DegreeC + 273.15;



const Answer = `${DegreeC} Degree celcius is ${DegreeF} degrees in Fahrenheit and ${DegreeK} degrees kelvin`;


document.getElementById('Target').innerHTML = Answer;
