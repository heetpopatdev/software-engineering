/* 
Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]
 */

let arr = [7, 9, 0, -2];
let n = 3;

let result = arr.slice(0, n);

console.log(result);

/*
Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]
*/

let num = [7, 9, 0, -2];
let first_n = 3;

let last_n = num.slice(-first_n);

console.log(last_n);

/*
Qs3. Write a JavaScript program to check whether a string is blank or not.
*/

let str = "Is this Empty or not";

if (str.length === 0) {
  console.log("Yes,Its empty");
} else {
  console.log("No, its not empty");
}

/*
Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
*/

let check_char_lowercase = "Hello";
let index = 1;

let ch = check_char_lowercase.charAt(index);

if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
  console.log("Lowercase");
} else {
  console.log("Not lowercase");
}

/*
Q5. JavaScript program to strip leading and trailing spaces from a string
*/

let text = "     HELLO WORLD    ";

let again_result = text.trim();

console.log(again_result);

/*
Qs6. Write a JavaScript program to check if an element exists in an array or not.
*/

let elements = [1, 2, 3, 5, 6];
let element = 3;

if (elements.includes(element)) {
  console.log("Element exists in the array");
} else {
  console.log("Element does not exist in the array");
}
