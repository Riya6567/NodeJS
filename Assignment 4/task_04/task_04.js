/* 4. Create a node.js project using express that serves different HTML files and 
add different routes and also performs a calculation (adding two numbers take from a user.)
*/
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded())
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/calculator',(req,res)=>{
    res.sendFile(path.join(__dirname,'calculator.html'))
})
app.post('/calculator',(req,res)=>{
    const sum = parseFloat(req.body.num1) + parseFloat(req.body.num2)
    res.send(`
        <h2> Sum of ${req.body.num1} and ${req.body.num2} is: ${sum} </h2>
        <a href = "/calculator"> Back to Calculator </a>
        `)
})
app.listen(5000,()=>{
    console.log(`Server Running on http://localhost:5000`)
})