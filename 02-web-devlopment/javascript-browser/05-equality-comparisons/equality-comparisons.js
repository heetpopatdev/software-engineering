// 1. Loose Equality (==)

console.log(5 == 5);

console.log(5 == "5");

// 2. Strict Equality (===)

console.log(5 === 5);

console.log(5 === "5");

// 3. Loose Vs Strict

let userId = 101;
let enteredId = "101";

console.log(userId == enteredId);

console.log(userId === enteredId);

// 4. Object.Is()

console.log(Object.is(5, 5));

console.log(Object.is(5, "5"));

// 5. NaN Comparison

console.log(NaN === NaN);

console.log(Object.is(NaN, NaN));

// 6. Zero Comparison

console.log(0 === -0);

console.log(Object.is(0, -0));

// 7. Object Comparison

let product1 = {
  name: "Milk",
};

let product2 = {
  name: "Milk",
};

console.log(product1 === product2);

// 8. Same Object Reference

let product3 = {
  name: "Tea",
};

let product4 = product3;

console.log(product3 === product4);

// 9. Same Value, Different Types

console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

// 10. Null And Undefined

console.log(null == undefined);

console.log(null === undefined);

// 11. Object.is()

console.log(Object.is("Hello", "Hello"));

console.log(Object.is(true, true));

console.log(Object.is(null, null));

// 12. isLooselyEqual -> ==

console.log(5 == "5");

// 13. isStrictlyEqual -> ===

console.log(5 === "5");

// 14. SameValue -> Object.is()

console.log(Object.is(NaN, NaN));

console.log(Object.is(0, -0));

// 15. SameValueZero

console.log([NaN].includes(NaN));

console.log([0].includes(-0));

// 16. Set uses SameValueZero

let numbers = new Set();

numbers.add(NaN);
numbers.add(NaN);

console.log(numbers.size);

// 17. 0 and -0 in set

let zerovalues = new Set();

zerovalues.add(0);
zerovalues.add(-0);

console.log(zerovalues.size);
