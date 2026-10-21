/*
Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
*/

let number = 287152;
let factorial = 0;

while (number > 0) {
  let last_digit = number % 10;
  factorial *= last_digit;
  number = Math.trunc(number / 10);
}

console.log("Number of digits: ", factorial);
