// 1. Default Parameters
console.log("\n--- Default Parameters ---");

function orderTea(teaType, quantity = 1) {
  return `Ordered ${quantity} cup(s) of ${teaType}`;
}

console.log(orderTea("green tea"));
console.log(orderTea("chai", 2));

// 2. Rest parameters

console.log("\n--- Rest Parameters ---");

function calculateTotal(...prices) {
  let total = 0;

  for (let price of prices) {
    total += price;
  }
  return total;
}
console.log("Total:", calculateTotal(100, 200, 50));

// 3. Arrow function

console.log("\n--- Arrow Functions ---");

const add = (a, b) => a + b;

const double = (number) => number * 2;

const greet = () => "Hello, Heet";

console.log("Addition: ", add(10, 20));
console.log("Double: ", double(5));
console.log(greet());

// 4. IIFE

console.log("\n--- IIFE ---");

(function () {
  let shopName = "Swiftly";
  console.log(`${shopName} is starting...`);
})();

const welcomeMessage = (() => {
  return "Welcome to Swiftly";
})();

console.log(welcomeMessage);

// 5. ARGUMENTS OBJECT

console.log("\n--- Arguments Object ---");

function showArguments() {
  console.log("First argument:", arguments[0]);
  console.log("Second argument:", arguments[1]);
  console.log("All argument:", arguments);
}

showArguments("Chai", 2, "green tea");

const showItems = (...items) => {
  console.log("Items:", items);
};

showItems("Chai", "coffee", "green tea");

// 6. SCOPE

console.log("\n--- Scope ---");

let shopName = "Swiftly";

function showShop() {
  let teaType = "chai";

  console.log("Shop:", shopName);
  console.log("Tea:", teaType);
}

showShop();

if (true) {
  let message = "Order confirmed";
  console.log(message);
}

// 7. Function call stack

console.log("\n--- Function Call Stack ---");

function first() {
  console.log("First starts");

  second();

  console.log("First ends");
}

function second() {
  console.log("Second starts");

  third();

  console.log("Second ends");
}

function third() {
  console.log("Third runs");
}

first();

// 8. Build-in functions

console.log("\n--- Build-in Functions ---");

console.log("Number:", Number("100"));
console.log("String:", String(100));
console.log("Boolean:", Boolean(0));
console.log("Integer:", parseInt("42px"));
console.log("Decimal:", parseFloat("3.14kg"));

console.log("Rounded:", Math.round(4.6));
console.log("Floor:", Math.floor(4.9));
console.log("Maximum", Math.max(10, 25, 7));
console.log("Minimum", Math.min(10, 25, 7));

console.log("Is Array:", Array.isArray(["chai", "coffee"]));
