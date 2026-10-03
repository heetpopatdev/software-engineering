// 1. For Loop

for (let i = 1; i <= 5; i++) {
  console.log("Product", i);
}

// 2. While Loop

let orderRemaining = 5;

while (orderRemaining > 0) {
  console.log("Delivering order");

  orderRemaining--;
}

// 3. FOR...OF

let products = ["Milk", "Bread", "Tea", "Rice"];

for (let product of products) {
  console.log(product);
}

// 4. FOR...IN

let product = {
  name: "Milk",
  price: 50,
  available: true,
};

for (let key in product) {
  console.log(key);
}

// 5. FOR...IN - KEY AND VALUE

for (let key in product) {
  console.log(key, product[key]);
}

// 6. Break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 7. Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
