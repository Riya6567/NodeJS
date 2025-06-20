// Write a node.js program that takes input from the user adds two numbers and prints the result.

// Import the readline module to take input from the user
const readline = require('readline');

// Create an interface for reading user input from stdin keyword
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to input the first number
rl.question('Enter the first number: ', (num1) => {
    // Ask the user to input the second number
    rl.question('Enter the second number: ', (num2) => {
        // Convert the input strings to numbers and compute the sum
        const sum = parseFloat(num1) + parseFloat(num2);

        // Output the result 
        console.log("The sum of ", num1 , " and " , num2, " is ", sum);

        // CLose the sum input interface
        rl.close();
    });
});