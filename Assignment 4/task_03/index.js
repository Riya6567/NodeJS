// 3. Create a node.js project using express that serves different HTML files, and add different routes.

const express = require('express')
const path = require('path')
const app = express()

// Route for HOME page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})

// Route for ABOUT page
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})

// Route for CONTACT page
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

// 404 page
app.use((req,res)=>{
    res.status(404).send(`<h1> 404: Page Not Found</h1>`)
})

// Set the server to listen on PORT 3000
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);  
})  