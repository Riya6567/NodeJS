// Write a node js program to demonstrate working with command line arguments.
// Display all the command line arguments
console.log("Command line ", process.argv) // argv = Argument variables

// Access Specific arguments
const name = process.argv[2]; // First argument
const age = process.argv[3]; // Second argument

// Check if the required arguments are provided
if (name && age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
} else {
    console.log("Please provide both your name and age as command line arguments.");
}
