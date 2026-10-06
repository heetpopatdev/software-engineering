// Expressions and Operators

// 1. Expressions

let price = 100;
let quantity = 3;

let total = price * quantity;

console.log("Total:", total);
console.log("Total > 200:", total > 200);
console.log("Total === 300:", total === 300);

// 2. Arithmetic Operators

console.log("Addition:", 10 + 5);
console.log("Subtraction:", 10 - 5);
console.log("Multiplication:", 10 * 5);
console.log("Division:", 10 / 5);
console.log("Remainder:", 10 % 3);
console.log("Power:", 2 ** 3);

// 3. Assignment Operators

let productPrice = 100;

productPrice += 20;
console.log("After += :", productPrice);

productPrice -= 10;
console.log("After -= :", productPrice);

productPrice *= 2;
console.log("After *= :", productPrice);

productPrice /= 2;
console.log("After /=", productPrice);

productPrice %= 30;
console.log("After %= :", productPrice);

// 4. Comparison Operators

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

console.log(10 == "10");
console.log(10 === 10);

console.log(10 != 5);
console.log(10 !== "10");

// 5. Logical Operators

//And
let age = 22;
let hasID = true;

console.log("AND:", age >= 18 && hasID);

//Or
let hasCash = false;
let hasCard = true;

console.log("OR:", hasCash || hasCard);

// NOT
let loggedIn = true;

console.log("NOT:", !loggedIn);

// 6. Increment and Decrement

let count = 5;

count++;

console.log("After increment:", count);

count--;

console.log("After decrement:", count);

// 7. Ternary Operator

let userAge = 20;

let ageResult = userAge >= 18 ? "Adult" : "Minor";

console.log("Age Result:", ageResult);

// Real-World example

let stock = 10;

let stockMessage = stock > 0 ? "Available" : "Out of stock";

// 8. Nullish coalescing operator

let username = null;

let displayName = username ?? "Guest";

console.log("Display Name:", displayName);

// Difference between || and ??
let itemQuantity = 0;

console.log("Using ||:", itemQuantity || 10);

console.log("Using ??:", itemQuantity ?? 10);

// Optional chaining

let user = {
  name: "Heet",
  address: {
    city: "Rajkot",
  },
};

console.log("City:", user.address?.city);

// Missing property
let anotherUser = {
  name: "Heet",
};

console.log("Missing City:", anotherUser.address?.city);

// 10. typeof Operator

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);

let userPrice = 500;

console.log(typeof userPrice);

// 11. instanceof operator

let numbers = [1, 2, 3];

console.log("Is Array:", numbers instanceof Array);

let customer = {
  name: "Heet",
};

console.log("Is Object:", customer instanceof object);

// 12. in Operator

let customerInfo = {
  name: "Heet",
  age: 22,
};

console.log("name exists:", "name" in customerInfo);
console.log("city exists:", "city" in customerInfo);

// 13. Operator precedence

let result1 = 10 + 5 * 2;

console.log("Without parentheses:", result);

let result2 = (10 + 5) * 2;

console.log("with parentheses:", result2);

// 14. String concatenation

let firstName = "Heet";
let lastName = "Popat";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

console.log("Price: ", +100);

// 15. Exponentiation

console.log("2 power 3:", 2 ** 3);
console.log("5 power 2:", 5 ** 2);

// End

console.log("Expression and Operators completed!");
