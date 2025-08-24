'use strict';


const DegreeC = +prompt('Input degeree');

const DegreeF = (DegreeC * 9) / 5 + 32;

const DegreeK = DegreeC + 273.15;



const Answer = `${DegreeC} Degree celcius is ${DegreeF} degrees in Fahrenheit and ${DegreeK} degrees kelvin`;


document.getElementById('Target').innerHTML = Answer;
