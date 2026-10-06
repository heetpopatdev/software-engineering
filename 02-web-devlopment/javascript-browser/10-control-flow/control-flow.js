// 1. Simple if

let age = 20;

if (age >= 18) {
  console.log("Adult");
}

// 2. if...else

let productAvailable = true;

if (productAvailable) {
  console.log("product is available");
} else {
  console.log("Product is out of stock");
}

// 3. if...else if..else

let marks = 75;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else {
  console.log("Fail");
}

// SWITCH

let category = "fruits";

switch (category) {
  case "fruits":
    console.log("Show fruits");
    break;
  case "vegetables":
    console.log("Show vegetables");
    break;
  case "dairy":
    console.log("Show dairy products");
    break;
  default:
    console.log("category not found");
}

// EXCEPTION HANDLING
// try / catch / finally

// Example 1: No error

try {
  console.log("Starting program");
  console.log("Program running");
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Program finished");
}

// Example 2: Error occurs

try {
  console.log("Checking user");

  console.log(userName);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Use check completed");
}

// THROW

try {
  let age = 15;

  if (age < 18) {
    throw new Error("You must be 18 or older");
  }
  console.log("Account created");
} catch (error) {
  console.log("Error:", error.message);
}

// Shooping example

try {
  let quantiy = 0;

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }

  console.log("Order placed");
} catch (error) {
  console.log("Order failed:", error.message);
}

// ERROR OBJECTS

try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
  console.log("Error Stack:", error.stack);
}
// ReferenceError example

try {
  console.log(userName);
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}

// TypeError example

try {
  let number = 10;
  number.toUppercase();
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
