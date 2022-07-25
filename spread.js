//Use the ES6 operator to find the minimum value in the array instead of using the .apply function
let numbers = process.argv.slice(2);
let min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);
