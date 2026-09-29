// ========================================
// 1. String
// ========================================

let name = "Heet";

console.log(name);
console.log(typeof name);

// ========================================
// 2. Number
// ========================================

let age = 22;
let price = 100.5;

console.log(age);
console.log(typeof age);

console.log(price);
console.log(typeof price);

// ========================================
// 3. Boolean
// ========================================

let isLoggedIn = true;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);

// ========================================
// 4. Undefined
// ========================================

let city;

console.log(city);
console.log(typeof city);

// ========================================
// 5. Null
// ========================================

let selectedProduct = null;

console.log(selectedProduct);
console.log(typeof selectedProduct);

// ========================================
// 6. BigInt
// ========================================

let bigNumber = 12345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

// ========================================
// 7. Symbol
// ========================================

let id = Symbol("userId");

console.log(id);
console.log(typeof id);

// ========================================
// 8. Object
// ========================================

let product = {
  name: "Tea",
  price: 50,
  available: true,
};

console.log(product);
console.log(typeof product);

console.log(product.name);
console.log(product.price);
console.log(product.available);

// ========================================
// 9. Array
// ========================================

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log(typeof fruits);

console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length);

// ========================================
// 10. Typeof
// ========================================

console.log(typeof "Heet");
console.log(typeof 22);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// ========================================
// 11. Prototype
// ========================================

let product1 = {
  name: "Milk",
  price: 50,
};

console.log(product1.toString());

// ========================================
// 12. Prototype Inheritance
// ========================================

let person = {
  greet: function () {
    console.log("Hello!");
  },
};

let student = Object.create(person);

student.greet();

// ========================================
// 13. Built-in Objects
// ========================================

console.log(Math.max(10, 20, 30));

console.log(Math.round(4.7));

let today = new Date();

console.log(today);

console.log(typeof today);

// ========================================
// 14. String with Multiple Values
// ========================================

let firstName = "Heet";

let lastName = "Popat";

let fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof fullName);

// ========================================
// 15. Type Conversion
// ========================================

let marks = "90";

console.log(marks);

console.log(typeof marks);

let numberMarks = Number(marks);

console.log(numberMarks);

console.log(typeof numberMarks);

// ========================================
// 16. JSON
// ========================================

let productData = {
  name: "Milk",
  price: 50,
};

// ========================================
// 17. Object → JSON
// ========================================

let jsonData = JSON.stringify(productData);

console.log(jsonData);

// ========================================
// 18. JSON → Object
// ========================================

let newProduct = JSON.parse(jsonData);

console.log(newProduct);

console.log(newProduct.price);
