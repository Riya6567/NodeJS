// 2. Create a node.js project using express that can response with both HTML and JSON.

const express = require('express')
const app = express()

// Route that sends HTML
app.get('/',(req,res)=>{
    res.send(`
        <html>
        <head> <title> HTML Response </title> </head>
        <body> 
            <h1> This is an HTML response </h1> 
            <p> This is a response served as HTML. </p>
        </body>
        </html>
    `)
})

// Route that sends JSON
app.get('/json', (req, res) => {
    res.json({
        message: 'This is a JSON response',
        data: 'This is some data',
        status: 'success'
    })
})

// Start the server and listen on the specified port
app.listen(5000,()=>{
    console.log(`Server Running on http://localhost:5000`)
})