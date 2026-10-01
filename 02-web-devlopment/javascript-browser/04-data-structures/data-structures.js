// 1. Arrays

let products = ["Milk", "Tea", "Bread", "Rice"];

console.log(products);

console.log(products[0]);
console.log(products[1]);

console.log(products.length);

// 2. Arrays - Push

products.push("Butter");

console.log(products);

// 3. Array - Pop

products.pop();

console.log(products);

// 4. Array - Shift

products.shift();

console.log(products);

// 5. Array - Unshift

products.unshift("Milk");

console.log(products);

// 6. Map - Set

let productMap = new Map();

productMap.set(101, "Milk");
productMap.set(102, "Tea");
productMap.set(103, "Bread");

console.log(productMap);

// 7. Map - Get

console.log(productMap.get(101));

// 8. Map - Has

console.log(productMap.has(102));

console.log(productMap.has(999));

// 9. Map - Delete

productMap.delete(102);

console.log(productMap);

// 10. Set

let uniqueProducts = new Set();

uniqueProducts.add("Milk");
uniqueProducts.add("Tea");
uniqueProducts.add("Milk");
uniqueProducts.add("Bread");

console.log(uniqueProducts);

// 11. Set - Has

console.log(uniqueProducts.has("Milk"));

console.log(uniqueProducts.has("Rice"));

// 12. Set - Delete

uniqueProducts.delete("Tea");

console.log(uniqueProducts);

// 13. Weakmap

let user = {
  name: "Heet",
};

let userData = new WeakMap();

userData.set(user, "User information");

console.log(userData.get(user));

// 14. WeakSet

let user1 = {
  name: "Heet",
};

let users = new WeakSet();

users.add(user1);

console.log(users.has(user1));

// 15. Typed Array

let numbers = new Int32Array([10, 20, 30, 40]);

console.log(numbers);

console.log(numbers[0]);
console.log(numbers[1]);

// 16. Json / Structured data

let productData = {
  name: "Milk",
  price: 50,
  available: true,
};

let jsonData = JSON.stringify(productData);

console.log(jsonData);

let javascriptObject = JSON.parse(jsonData);

console.log(javascriptObject);

console.log(javascriptObject.name);
