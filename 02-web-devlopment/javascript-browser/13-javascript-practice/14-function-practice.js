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
