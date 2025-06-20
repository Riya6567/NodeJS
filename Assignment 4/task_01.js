// 1. Write a node.js program to create a server using express framework.

// Import the Express module
const express = require('express')

// Create an Express application
const app = express()

// Define a route for the root URL "/"
app.get('/',(req,res)=>{
    res.send('Welcome to Express server!')
})

// Start the server and listen on the specified port
app.listen(5000,()=>{
    console.log(`Server Running on http://localhost:5000`)
})