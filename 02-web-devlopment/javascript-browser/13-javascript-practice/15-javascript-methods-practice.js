let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

newArr.push(6);

console.log(arr);
console.log(...newArr);

let chars = [..."hello"];
console.log(...chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];
console.log(nums);

const data = {
  email: "popatheet8@gmail.com",
  password: "abcd",
};

const dataCopy = { ...data, id: 123, country: "India" };

console.log(dataCopy);

let arr1 = [1, 2, 3, 4, 5];
let obj1 = { ...arr1 };

console.log(obj1);

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us: ", args[i]);
  }
}

console.log(sum(1, 2, 3, 4));

function min() {
  console.log(arguments.length);
}

min(1, 2, 3, 4, 5);

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, ele) => {
    if (min < ele) {
      return min;
    } else {
      return ele;
    }
  });
}

console.log(min("hii", 1, 2, 3, 4, 5, -10));

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];

let [winner, runnerup, ...others] = names;

console.log(others);

const student = {
  name: "Heet",
  age: 24,
  class: 12,
  subjects: ["hindi", "english", "math", "science"],
  username: "heet@123",
  password: "abcd",
};

let { username, password, place = "keshod" } = student;

console.log(username, password, place);

// Question:- Check if all numbers in our array are multiples of 10 or not.

let number_multiply_by_10_or_not = [10, 20, 30, 40, 50];

let ans = number_multiply_by_10_or_not.every((el) => el % 10 == 0);

console.log(ans);

// Question:- Create a function to find the min number in an array.

function getMin(find_minimum) {
  let minimum = find_minimum.reduce((min, element) => {
    if (min < element) {
      return min;
    } else {
      return element;
    }
  });
  return minimum;
}

let find_minimum = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(minimum);

// Question :- Square and sum the array elements using the arrow function and then find the average of the array.

let array = [1, 2, 3, 4, 5];

let square = array.map((num) => num * num);

let sum = array.reduce((total, element) => total + element);

let average = sum / array.length;

console.log("Squared Array: ", square);
console.log("Sum: ", sum);
console.log("Average: ", average);

// Question :- Create a new array using the map function whose each element is equal to the origial element plus 5.

let array1 = [10, 20, 30, 40, 50];

let newArray = array1.map((element) => {
  return element + 5;
});

console.log(newArray);

// Question :- Create a new array whose elements are in uppercase of words present in the original array.

let words_in_lowercase = ["keshod", "junagadh", "rajkot", "alaska"];

let words_in_uppercase = words_in_lowercase.map((words) => {
  return words.toUpperCase();
});

console.log(words_in_uppercase);

// Question :- Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additinal arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
  let double = args.map((element) => {
    return element * 2;
  });
  let result = [...arr, ...double];
  return result;
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));

// Question :- Write a function called mergeObjects that accepts two objects and returns a new object which contain all the keys and values of the first object and second object.

let first_object = {
  name: "heet",
  age: 22,
};

let second_object = {
  city: "rajkot",
  course: "mca",
};

function mergeObjects(first_object, second_object) {
  let merge_object = [...first_object, ...second_object];

  return merge_object;
}

console.log(mergeObjects);
