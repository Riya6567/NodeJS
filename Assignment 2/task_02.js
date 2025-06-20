// Write a node js program to describe asynchronous and synchronous function.

// Synchronous function
function syncFunction() {
    console.log("Synchronous function started");
    for (let i = 0; i < 2; i++) {
        console.log(`Sync Count: ${i}`);
    } 
    console.log("Synchronous function end.\n");
    
}

// Asynchronous function using setTimeout
function asyncFunction() {
    console.log("Asynchronous function started");
    setTimeout(() => {
        for (let i = 0; i < 2; i++) {
            console.log(`Async Count: ${i}`);
        }
        console.log("Asynchronous function ended.\n");
    }, 2000); 
}

// Execute functions
console.log("Execution started");
syncFunction();
asyncFunction();
console.log("Execution finished");