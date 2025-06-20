// Create a node js project with package.json file 
// and describe pit with an external package like .env

const dotenv = require('dotenv')
console.log(dotenv);
console.log(dotenv.config());

console.log(process.env.NAME);
console.log(process.env.DB_HOST);
console.log(process.env.DB_DATABASE);



/*
At first create a folder named "project_v1".
Initialize a node.js project by running the command in the terminal => npm init

package name: (project_v1)
version: (1.0.0) 4.2.0
description: This is Node.js project
entry point: (index.js)
test command: node index.js
git repository:
keywords: npm, node
author: Riya Dey
license: (ISC)
About to write to C:\Users\riyad\OneDrive\Desktop\NodeJS\Assignment 2\project_v1\package.json:

{
  "name": "project_v1",
  "version": "4.2.0",
  "description": "This is Node.js project",
  "main": "index.js",
  "scripts": {
    "test": "node index.js"
  },
  "keywords": [
    "npm",
    "node"
  ],
  "author": "Riya Dey",
  "license": "ISC"
}


Is this OK? (yes) yes
*/