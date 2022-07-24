/*
process.arg is used get the command line arguments and they are stored in the variable inputs.
The array is then manipulated using .map() to convert them to the first character and .reduce() to join them to form a single word.
*/

var inputs = process.argv.slice(2);
var result = inputs.map(a => a[0]).reduce((a1, a2) => a1 + a2);
console.log(`[${inputs}] becomes "${result}"`);

