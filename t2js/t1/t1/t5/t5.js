'use strict';

const array = [8, 23, 105, 42, 7, 66, 19, 90];

let order = prompt("Type 'asc' for ascending or 'desc' for descending order:").toLowerCase();

function sortArray(arr, order) {
  if(order === 'asc') {
    return [...arr].sort((a, b) => a -b);
  } else if (order === 'desc') {
    return [...arr].sort((a, b) => b - a);
  } else {
    console.error("Invalid order, Use 'asc' or 'desc'.");
    return arr;
  }
}

const sortedArray = sortArray(array, order);
console.log('Original array:', array);
console.log('Sorted array:', sortedArray);

document.getElementById('target').innerText =
  `Original array: ${array}\nSorted array: ${sortedArray}`;
