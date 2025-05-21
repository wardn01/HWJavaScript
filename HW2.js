// 'use strict';

// String methods ***********************************************************************

//task#1

// let name = 'Mary '
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'
// console.log(bio.length); // 25 long a bio

//task#2

// const str =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
//   const any = prompt("any number ");
//   console.log(`char ${any} is :${str[any]}`);

//task#3

// let str = prompt("Enter a string:");
// console.log(`first char: ${str[0]} ,last :${str[str.length-1]}`);

//task#4

// let str = 'abcde';
// let reversed = '';
// for (let i = str.length - 1; i >= 0; i--)
//   reversed += str[i];
// console.log(reversed);

//task#5

// const str = "js"
// console.log( str.toUpperCase() ); // "JS"

//task#6

// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// const anyword = prompt("any word ");
// console.log(`the word : ${anyword} in str -> ${str.includes(anyword)}`);

//task#7

// const elem = '-';
// let str = '1-2-3-4-5';
// while (str.includes(elem))
// 	str = str.replace(elem, '.');
// console.log(str);

//task#8

// const elem = '-';
// let str = '1-2-3-4-5';
// console.log(str.replaceAll(elem, '.'));

//task#9

// const str = 'sdfwe'
// console.log(str.substring(4,2)); // fw

//task#10

// const str = "I'm learning javascript!";
// const word1 = str.slice(4, 12);      // learning
// const word2 = str.slice(13, 23);     // javascript
// const word3 = str.substring(4, 12);   // learning
// const word4 = str.substring(13, 23);  // javascript
// const word5 = str.substr(4, 8);       // learning
// const word6 = str.substr(13, 10);     // javascript

//task#11

// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';
// if (str.indexOf('http://') === 0)
//   console.log("The string starts with 'http://'");
// else
//   console.log("noon'");

//task#12

// const str = 'https://www.notion.html';
// if (str.indexOf('.html') === str.length - 5)
//   console.log("The string ends with '.html'");
// else
//   console.log("noon");

//task#13

// const str = 'ab cd cd cd ef';
// console.log(str.lastIndexOf('cd'));   // 10
// console.log(str.lastIndexOf('cd', 8)); // 7

//task#14

// const str = 'abcde';
// console.log(str.startsWith('abc'));   // true
// console.log(str.startsWith('xxx'));   // false
// console.log(str.startsWith('bc', 1)); // true

//task#15

// const str = 'abcde';
// console.log(str.endsWith('cde'));  // true
// console.log(str.endsWith('xxx'));  // false
// console.log(str.endsWith('bc', 3)); // true

//task#16

// let str = "ab-cd-ef";
// console.log(str.split("-")); // ['ab', 'cd', 'ef']
// console.log(str.split("-", 2)); // ['ab', 'cd']
// console.log(str.split("")); // ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
// console.log(str.split("", 3)); // ['a', 'b', '-']
// let str2 = "12345";
// console.log(str2.split("")); // ['1', '2', '3', '4', '5']
