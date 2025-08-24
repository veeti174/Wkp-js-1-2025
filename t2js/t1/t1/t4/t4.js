'use strict';

const array = [1, 2, 3, 4, 5];

function sortArray(array) {
  return array.sort((a, b) => b - a);
};
console.log(sortArray(array));
