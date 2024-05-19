// ----- QUESTION 1 -----
let fruits: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits); //array containing string elements.

// ----- QUESTION 2 -----
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers); //array containing only numbers.

// ----- QUESTION 3 -----
let thirdFruit = fruits[2];
console.log(thirdFruit); //accessing the third element of fruits

// ----- QUESTION 4 -----
numbers[1] = 25;
console.log(numbers); //changing the second element of number array to 25

// ----- QUESTION 5 -----
fruits.push("grape");
console.log(fruits); //adding the element grape to the fruits array

// ----- QUESTION 6 -----
let lastFruit = fruits.pop();
console.log(fruits); //removing the last element from fruits arrary

// ----- QUESTION 7 -----
let firstFruit = fruits.shift();
console.log(fruits); //removing the first element from fruits array

// ----- QUESTION 8 -----
fruits.unshift("Kiwi");
console.log(fruits); //adding element kiwi to the fruits array

// ----- QUESTION 9 -----
fruits.splice(1, 2);
console.log(fruits); //removing 2 element from fruits array

// ----- QUESTION 10 -----
fruits.splice(2, 0, "pear", "pineapple");
console.log(fruits); //inserting 2 elements pineapple and pear at index 2

// ----- QUESTION 11 -----
const citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits); //a new array that contains first 2 elements of fruits array

// ----- QUESTION 12 -----
const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); //a new array that contains last 2 elements of fruits array
