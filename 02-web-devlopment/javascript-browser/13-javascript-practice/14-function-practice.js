// Q1 :- Write a JavaScript function that returns array elements larger than a number.
function larger_element(number) {
  let array = [11, 1, 4, 9, 54];
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      new_array.push(array[i]);
    }
  }
  return new_array;
}

console.log(larger_element(10));

// Q2: Write a Javascript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

function extract_unique_characters(word) {
  let str = " ";
  for (let i = 0; i < word.length; i++) {
    if (!str.includes(word[i])) {
      str += word[i];
    }
  }
  return str;
}

console.log(extract_unique_characters("abcdabcdefgggh"));

// Q3: Write a JavaScript function that accepts a list of country names as input and return the longest country names as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// Output: "United States of America"

function longest_country_name(country) {
  let longest = country[0];
  for (let i = 0; i < country.length; i++) {
    if (country[i].length > longest.length) {
      longest = country[i];
    }
  }
  return longest;
}

console.log(
  longest_country_name(["Australia", "Germany", "United States of America"]),
);

// Q4: Write a JavaScript function to count the number of vowels in a String argument.

function count_vowels_in_string(word) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(count_vowels_in_string("Heet"));

// Q5: Write a JavaScript function to generate a random number within a range (start,end).

function random_number_generator(start, end) {
  let random = Math.floor(Math.random() * 6) + 45;
  return random;
}

console.log(random_number_generator(45, 50));

// Q6: Write an arrow function that returns the square of a number 'n'.

const square = (n) => {
  n * n;
};

console.log(square(2));

// Q7: Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
  console.log("Hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("Clear");
}, 10000);

// Q8: Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log(arrayAverage([1, 2, 3, 4, 5]));

// Q9: Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven = (number) => {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(4);

// Q10: What is the output of the following code:
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 100);

// It will execute this after 1 second but Hello world is will not visible because they did not mention ()

// Qs4. What is the output of the following code :

let length = 4;

function callback() {
  console.log(this.length);
}

const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object1.method(callback, 1, 2);
