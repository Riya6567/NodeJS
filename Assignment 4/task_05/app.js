// To create a node.js project that include parameter you can define route that accepts dynamic values in URL.
const express = require('express')
const app = express()

const userRouter = require("./user")
const postRouter = require("./post")
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Root Route..")
})
app.get('/about',(req,res)=>{
    res.send("About Us..")
})

app.use("/user",userRouter)
app.use("/post",postRouter)

app.listen(5000,()=>{
    console.log(`Server running at http://localhost:5000/`)
})