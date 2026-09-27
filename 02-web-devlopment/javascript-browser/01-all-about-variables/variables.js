// 1. Let

let age = 22;

console.log("Age:", age);

age = 23;

console.log("New Age:", age);

// 2. Const

const website = "Swiftly";

console.log("website:", website);

// 3. Variable Declaration

let city;

city = "Rajkot";

console.log("City:", city);

// 4. Multiple Variables

let firstName = "Heet";
let country = "India";

console.log("Name:", firstName);
console.log("Country:", country);

// 5. Block scope

{
  let productPrice = 100;

  console.log("Product Price:", productPrice);
}

// 6. Function scope

function showuser() {
  let username = "Heet";

  console.log("User:", username);
}

showuser();
