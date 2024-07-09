// Task 1: FizzBuzz
// Description: Write a function fizzBuzz that takes an integer n and prints the numbers from 1 to n.
//For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
//For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzbuzz(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  return array;
}

// Task 2: Reverse a String
// Description: Write a function reverseString that takes a string and returns the string reversed.

function solution(str) {
  return str.split("").reverse().join("");
}

// Task 3: Sum of Array
// Description: Write a function sumArray that takes an array of numbers and returns the sum of the numbers.

function sum(numbers) {
  "use strict";
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
