/*
Obtain the values using process.argv and then extract the required information using destructuring
*/
let userArray = process.argv.slice(2);
let data = {};
[ , data.username, data.email] = userArray;
console.log(data);

