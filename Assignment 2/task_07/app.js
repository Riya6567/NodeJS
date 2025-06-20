// Import the local module
const person = require("./person");

console.log("Person Details:");
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Profession: ${person.profession}`);

console.log("\nCalling the greet function:");
console.log(person.greet());
