// Write a node js program to describe the core module path.

// Import the core module path
const Path = require('path');
//console.log(Path);

// // // 1. Using path.join() - Combines multiple path segments into a single path string.
const filePath = Path.join('user','docs','project','file.txt');
console.log("Path.join(): ",filePath); // Output: user/docs/project/file.txt

// // // 2. Using path.resolve() - Resolves relatives paths to an absolute path.
const absolutePath = Path.resolve('user','docs','project','file.txt'); // filePath o deya jay argument e 
console.log("Path.resolve(): ",absolutePath); // Resolve path means actual path, current/working/directory/
console.log("Resolved Path: ",Path.resolve(__filename)); // Returns current path name 

// // // 3. Using path.basename() - Returns the last part of a path.
const baseName = Path.basename('user/docs/project/file.txt');
console.log("Path.basename(): ",baseName); 
console.log("Our file name : ",Path.basename(__filename)); // Returns current file name

// // // 4. Using path.dirname() - Returns the directory name of a path.
const dirName = Path.dirname('user/docs/project/file.txt');
console.log("Path.dirname(): ",dirName); 
console.log("Our DIR name : ",Path.dirname(__filename)); // Returns current DIR name

// // // 5. Using path.extname() - Returns the file extension.
const extName = Path.extname('user/docs/project/file.txt');
console.log("Path Extension: ",extName); 
console.log("Our file extension : ",Path.extname(__filename)); // Returns current file extension

// // // 6. Using path.parse() - Parse a path into an object and returns object
const parsedPath = Path.parse('user/docs/project/file.txt');
console.log("Path.parse(): ",parsedPath); 
console.log("Our Parsed Path: ",Path.parse(__filename)); // Returns current parsed path

// // // 7. Using Path.format() - Formats a path object into a string.
const pathObject = {
    root: '/',
    dir: 'user/docs/project',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}
const formattedPath = Path.format(pathObject);
console.log("Path.format(): ",formattedPath); 