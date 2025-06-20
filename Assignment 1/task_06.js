// Write a node js script that works with REPL environment. 

// Import the 'REPL' module to create a custom REPL environment.
const repl = require('repl');
const server = repl.start({
    prompt: '$', // Customize the prompt symbol
    input: process.stdin, // standard input stream
    output: process.stdout, // standard output stream
    terminal: true // Ensures that the input is a terminal
});

// Create a custom REPL environment with a custom prompt symbol.
server.on('line',(line) => {
    console.log(`You Entered:  ${line}`);
});

// Event listener for the 'exit' event
server.on('exit',() => {
    console.log("REPL session has ended.");
});

// Add custom variables or functions to the REPL environment.
server.context.greet = function(name){
    return `Hello, ${name}! Welcome to Node.js REPL.`;
};
server.context.add = function(a,b){
    return a + b;
};
server.context.subtract = function(a,b){
    return a - b;
};
