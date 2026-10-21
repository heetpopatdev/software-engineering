/*
Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6
*/

let number = 28752;
let count = 0;

while (number > 0) {
  let last_digit = number % 10;
  count++;
  number = Math.trunc(number / 10);
}

console.log("Number of digits: ", count);
