// Write a node js program to calculate the time taken by multiple functions to execute.
function functionMeasure(func, label) {
    console.time(label); // Start the timer with the given label
    func();
    console.timeEnd(label); // End the timer and log the time taken
}

// Example Function 1
function functionOne() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum += i;  // sum = sum + i;
    }
    return sum;
}

// Example Function 2
function functionTwo() {
    let result = 1;
    for (let i = 0; i < 1000; i++) {
        result = result * i;   // result *= i;
    }
    return result;
}

// Example Function 3
function functionThree() {
    let count = 1;
    for (let i = 0; i <= 10000; i++) {
        count++;
    }
    return count;
}

functionMeasure(functionOne, "Function One");
functionMeasure(functionTwo, "Function Two");
functionMeasure(functionThree, "Function Three");