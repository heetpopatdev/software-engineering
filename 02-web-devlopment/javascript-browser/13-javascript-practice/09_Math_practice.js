console.log(Math.PI);
console.log(Math.E);
// give positive absolute value
console.log(Math.abs(-12));
console.log(Math.pow(2, 4));
// give smallest nearest number or number itself
console.log(Math.floor(5));
console.log(Math.floor(5.5));
console.log(Math.floor(-5.5));
// give larger nearest number
console.log(Math.ceil(-5));
console.log(Math.ceil(5.5));
// give different random value every time
// generates random number from 0 to 1 and it will never generate 1
console.log(Math.random());
//If we want to generate randome number between 1 to 5 then we will multiply Math.random() * 5 or if we want number between 1 to 10 then multiply with 10 right but we never get 10 or 5.
console.log(Math.random() * 5);
let num = console.log(Math.random() * 10);

// floor is used to remove all decimal values
num = Math.floor(num);

// + 1 because we want exact between 1 to 10 exactly till 10 not till 9 right without +1 it gives only till 9.
num = num + 1;

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Questions
/*
1. Generate a random number between 1 and 100.
*/
Math.floor(Math.random() * 100) + 1;

/*
2. Generate a random number between 21 to 25
*/

Math.floor(Math.random() * 5) + 21;
