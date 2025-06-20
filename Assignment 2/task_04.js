// Write a node js program to describe the core modules path and fs .
// Import the core modules path and fs.
const Path = require('path');
const fs = require('fs');

// console.log(Path);
// console.log(fs);

// 1. Using fs.readFile() to asynchronously read a file
console.log("Read file operation");
const fileName = Path.join(__dirname, 'sample1.txt'); // __dirname points to the current

fs.readFile(fileName, 'utf8', (err,data) => {
    if (err) {
        console.log("Error Reading File: ",err);
        return;
    }
    console.log("File Content (readFile): ", data);
});
console.log("End file read operation.");

console.log("Start file read operation sync");
const fileReadData = fs.readFileSync(fileName);
console.log("End file read operation sync");

// Create file
const fileName2 = Path.join(__dirname, 'sample.txt');
const datafd = "This is example async file creation.";
fs.writeFile(fileName2, datafd, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Create file.");    
});

// 2. Using fs.writeFile() to write data to a file (Creates file if it doesn't exist)
const contentToWrite = 'This is some content written to the file by fs.writeFile()';
fs.writeFile(fileName, contentToWrite, (err) => {
    if (err) {
        console.log("Error Writing File: ",err);
        return;
    }
    console.log("File Content (writeFile): ", contentToWrite);
});

// Update file 
fs.appendFile(fileName2, "Add some content", (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Update file.");        
})

// Delete file 
fs.unlinkSync(fileName2);
console.log("Delete file.");