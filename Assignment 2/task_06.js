// Write a node js program to describe local models with two functions.
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    if (b == 0) {
        return "Error! Division by zero is not allowed.";
    }
    return a / b;
}

// Alternative way to export local modules using ES6 syntax
module.exports = {
    multiply: multiply, 
    division: division
};
