/*
1. Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", "oolong tea".
    Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

/*

2. Declare an array named 'cities' containing "London", "Tokyo", "Paris", and "New York".
    Access the third element in the array and store it in a variable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[2];

/*
3.You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai".
    Change the second element of the array to "jasmine tea".
*/

let teaTypes = ["hearbal tea", "white tea", "masala chai"];

console.log(teaTypes[2]);

teaTypes[2] = "jasmine tea";

console.log(teaTypes[2]);

/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney".

    Add "Berlin" to the array using the 'push' method.

*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("berlin");

console.log(citiesVisited);

/*
5. You have an array named 'teaOrders' with "Chai","iced tea","matcha", and "early grey".
    Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/

let teaOrders = ["Chai", "iced tea", "matcha", "early greay"];

const lastOrder = teaOrders.pop();

console.log(lastOrder);
