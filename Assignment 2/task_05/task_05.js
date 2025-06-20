/*Create a program in node js that demonstrate 
the use of buffer for reading from strings dealing with files, 
handling network data and more.*/
const fs = require('fs');
// Read a file using buffer
fs.readFile('sample.txt', (err, data) => {
    if (err) {
        console.log("Error reading file");
    }
    console.log('File content in buffer:', data);
    console.log('File content as string:', data.toString());
});
// Write a buffer to a file
const bufferToWrite = Buffer.from('This content was written using Buffer!');
fs.writeFile('output.txt', bufferToWrite, (err) => {
    if (err) {
        console.log("Error reading file");
    }
    console.log('Buffer written to output.txt');
});