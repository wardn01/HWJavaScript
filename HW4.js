//ורד נגאר 325523017 
//מוחמד ריאן 327640835
// 'use strict';

//task#1
const addExclamation = (str) => str + "!";

//task#2
const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");

//task#3
const squareAll = (arr) => arr.map((x) => x * x);

//task#4
const filterNames = (names, minLength) =>
  names.filter((name) => name.length > minLength);

//task#5
const allPositive = (numbers) => numbers.every((num) => num > 0);
