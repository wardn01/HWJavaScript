// 'use strict';

// True or False ***********************************************************************

// task#1

// if ("0") {
//   alert("Hello"); // alert Hello
// }

// task#2

// let namejava = prompt("what the name for javascript", "null");
// if (namejava == "ECMAScript") console.log("yes true");
// else console.log("noo ??");

// task#3

// let score = 75;
// let grade;
// grade =
//   score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 70
//     ? "C"
//     : score >= 60
//     ? "D"
//     : F;
// console.log("Grade : ", grade);

// task#4

// let number = prompt("enter a number : ", "null");
// console.log(number > 0 ? "big" : number < 0 ? "min" : "0");

// task#5

// let a = Number(prompt("enter a :"));
// let b = Number(prompt("enter b :"));
// console.log(a + b < 4 ? "Not enough" : "A lot");

// task#6

// let login = prompt("enter your acount");
// let message;
// message =
//   login == "Employee" || login == "Director"
//     ? "Hello"
//     : login == ""
//     ? "No login"
//     : "";
// console.log(message);

// task#7

// console.log(false || "sdf"); //sdf
// console.log(false && ""); //false
// console.log(true || ""); // true
// console.log(true && ""); // ''
// console.log(undefined || null); //null
// console.log(undefined || 0 || null); //null
// console.log(undefined && 0 && null); //undefined
// console.log(1 || 0); //1
// console.log(null || 1); //1
// console.log(null || 0 || 1); //1

// Loops ************************************************************************************

//task#1

// let sum = 0;
// let i = 1;
// while (i < 101) sum += i++;
// console.log(sum); //5050

//task#2

// let number0;
// do {
//   number0 = prompt("Please enter a positive number:");
// } while (isNaN(number0) || number0 <= 0); //isNaN if the let number = number not string
// console.log("Valid number entered:", number0);

//task#3

// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} `);
// }

//task#4

// let correctNumber = 7;
// let guess;
// for (i = 0;; i++) {
//   guess = prompt("Guess the number between 1 and 10:");
//   if (guess != correctNumber) {
//     alert("Incorrect. Try again.");
//   } else {
//     alert("Correct!");
//     break;
//   }
// }

//task#5

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

//task#6

// let i = 3;
// while (i) {
//   alert( i-- ); // 3 2 1
// }
// The loop runs as long as i is not 0.
//  0 is considered false, and any other number is true.

//task#7

// No, they do not show the same values
// Left: 1, 2, 3, 4
// Right: 1, 2, 3, 4, 5

//task#8

// Yes, they show the same values
// 0, 1, 2, 3, 4

//task#9

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//task#10

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }
