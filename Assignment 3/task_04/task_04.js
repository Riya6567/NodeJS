// 4. Write a node.js program to perform CRUD (Create, Read, Update, Delete) 
// operation on a file using the fs core module.
const fs = require('fs');
const filePath = './data.txt';
// CREATE
function createFile(content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log('File created successfully.');
    });
}
// READ
function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);
    });
}
// UPDATE (Append)
function updateFile(newContent) {
    fs.appendFile(filePath, `\n${newContent}`, (err) => {
        if (err) throw err;
        console.log('File updated successfully.');
    });
}
// DELETE
function deleteFile() {
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('File deleted successfully.');
    });
}
// USAGE EXAMPLES (uncomment one at a time)

// createFile("Hello, this is the initial content.")
// readFile()
// updateFile("This is new appended content.")
 deleteFile()
