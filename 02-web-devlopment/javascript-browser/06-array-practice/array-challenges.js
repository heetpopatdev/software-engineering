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

/*
6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "Chai".
    Create a soft copy of this array named 'softCopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/*
7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
    Create a hard copy of this array named 'hardCopyCities'.
*/

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];

topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

/*

8. You have two arrays: 'europeanCities' containing "Paris" and "Rome" and "asianCities" containing "Tokyo" and "Bankok".
    Merge these two array into a new array named 'worldCities'.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bankok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

/*
9. You have an array named 'teaMenu' containing
"masala chai", "oolong tea", "green tea", and "earl grey".
    Find the length of the array and store it in a variable named 'menuLength'.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

console.log(menuLength);

/*

10. You have an array named 'CityBucketList' containing "Kyoto", "London", "Cape Town", and "Vancouver".
    Check If "London" is in the array and store the result in a variable named "isLondonList".
*/

let CityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonList = CityBucketList.includes("London");

console.log(isLondonList);
