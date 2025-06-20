const bodyparser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyparser.urlencoded({extended:true}))
const todos=[]
// app.use(express.json())
app.get('/',(req,res)=>{
    let tablerows = todos.map((item,index)=>
        `<tr><td> ${index+1} </td><td> ${item.task}</td></tr>`
    ).join("")
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <style>
            body{
                font-family: Arial, Helvetica, sans-serif;
                padding: 20px;
            }
            table,th,td{
                border: 1px solid black;
                border-collapse: collapse;
                padding: 8px;
            }
            table{
                width: 50%;
                margin-top: 20px;
            }
        </style>
        <body>
            <form action="/add" method="post">
                <input type="text" name="task" placeholder="Enter a task" required>
                <button type="submit">Add Task</button>
            </form>
            <table>
                <tr>
                    <th>SL no</th>
                    <th>Task</th>
                </tr>
                ${tablerows}
            </table>
        </body>
        </html>
    ` 
    res.send(html)
})
app.post("/add",(req,res)=>{
    todos.push(req.body)
    res.redirect('/')
})
app.listen(5000,()=>{
    console.log(`Server running at http://localhost:5000/`)
})