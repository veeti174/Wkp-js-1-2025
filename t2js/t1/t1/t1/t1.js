'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(
  "Fruits: ", fruits,
  "Lenght:" fruits.lenght,
  "Index :", fruits[2],
  "Last:" fruits[fruits.lenght - 1]
);

const vegetables = Array.from({length: 3}, (_, i) => prompt(`Enter vegetable ${i + 1}:`));
console.log("Vegetables:", vegetables,"Lenght:", vegetables.lenght);
