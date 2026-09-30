// 1. Type Conversion

let marks = "90";

let numberMarks = Number(marks);

console.log(numberMarks);
console.log(typeof numberMarks);

// 2. String Conversion

let age = 22;

let textAge = String(age);

console.log(textAge);
console.log(typeof textAge);

// 3. Boolean conversion

let value = 1;

let booleanValue = Boolean(value);

console.log(booleanValue);
console.log(typeof booleanValue);

// 4. Explicit type casting

let price = "500";

let conversionPrice = Number(price);

console.log(conversionPrice);
console.log(typeof conversionPrice);

// 5. Implicit type casting

let a = "10";
let b = 20;

console.log(a + b);
console.log(a * b);

// 6. More implicit conversion

let quantity = "5";

console.log(quantity * 2);

// 7. NaN

let text = "Hello";

let result = Number(text);

console.log(result);
console.log(typeof result);

// 8. Boolean values

console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Hello"));
console.log(Boolean(""));

console.log(Boolean(null));
console.log(Boolean(undefined));
