var fruits = ["Apple", "Banana", "Orange"];
var findIndex = fruits.indexOf("Banana");
// Finding the Index 
console.log("Index of Banana is ",findIndex);

// Replacing the Banana 
fruits[1] = "Mango";
console.log("\nAfter replacing banana: ");
console.log(fruits);

// Removing Orange 
fruits.pop();
console.log("\nAfter removing orange: ");
console.log(fruits);

// Adding Watermelon 
fruits.push("Watermelon");
console.log("\nAfter adding watermelon: ");
console.log(fruits);