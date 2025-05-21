// 'use strict';

// methods ***********************************************************************

//task#5

// const fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(1, 1, "blueberry", "blackberry");
// console.log(fruits);

//task#6

// const colors = ["red", "orange", "yellow", "green", "blue"];
// console.log(colors.slice(1, 3));

//task#7

// const animals1 = ["cat", "dog"];
// const animals2 = ["lion", "tiger"];
// const allAnimals = animals1.concat(animals2);
// console.log(animals1.concat(animals2));

//task#8

// const numbers = [7, 3, 9, 1, 5];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 3, 5, 7, 9]

//task#9

// const letters = ["a", "b", "c", "d"];
// letters.reverse();
// console.log(letters); // ["d", "c", "b", "a"]

//task#10

// const sentence = "JavaScript is awesome";
// const words = sentence.split(" ");
// console.log(words); // ["JavaScript", "is", "awesome"]

//task#11

// const words = ["Hello", "world"];
// const word = words.join(" "); // Combines the words with a space
// console.log(word); // Output: "Hello world"

// מעבדים מערכים ***********************************************************************

//task#14

// const students = ["דני", "נועה", "רן", "תמר"];

// students.forEach(function (student) {
//   console.log("שלום " + student + " בהצלחה במבחן");
// });

//task#15

// const pricesILS = [100, 250, 75, 320];

// pricesILS
//   .map(function (price) {
//     return price / 3.5;
//   })
//   .forEach(function (price) {
//     console.log(price); // Output: 28.57, 71.43, 21.43, 91.43
//   });

//task#16

// const users = [
//   { username: "Tom", isLoggedIn: true },
//   { username: "Jerry", isLoggedIn: false },
//   { username: "Spike", isLoggedIn: true },
// ];

// const loggedInUsers = users.filter(function (user) {
//   return user.isLoggedIn;
// });
// console.log(loggedInUsers);

//task#17

// const products = [
//   { name: "Book", quantity: 3 },
//   { name: "Pen", quantity: 0 },
//   { name: "Notebook", quantity: 5 },
// ];

// const isOutOfStock = products.some(function (product) {
//   return product.quantity === 0;
// });
// console.log(isOutOfStock); // true

//task#18

// const grades = [72, 85, 90, 67, 58];

// const allPassed = grades.every(function (grade) {
//   return grade >= 60;
// });
// console.log(allPassed); // false

//task#19

// const employees = [
//   { name: "Sharon", salary: 9500 },
//   { name: "David", salary: 7800 },
//   { name: "Lior", salary: 12000 },
// ];

// const highEarners = employees
//   .filter(function (emp) {
//     return emp.salary > 8000;
//   })
//   .map(function (emp) {
//     return emp.name.toUpperCase();
//   });

// console.log(highEarners);

//task#20

// const books = [
//   { title: "Book A", pages: 450 },
//   { title: "Book B", pages: 520 },
//   { title: "Book C", pages: 600 },
// ];

// const hasSmallBook = books.some(function (book) {
//   return book.pages <= 500;
// });

// if (hasSmallBook) {
//   const bigBooks = books.filter(function (book) {
//     return book.pages > 500;
//   });
//   console.log(bigBooks);
// }
