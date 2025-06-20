const express=require("express")
const postRouter=express.Router()
postRouter.get("/",(req,res)=>{
    res.send("Do Something on GET METHOD on /post route")
})
postRouter.get("/:id",(req,res)=>{
    res.send("Do Something on GET METHOD on /post route")
})
postRouter.post("/",(req,res)=>{
    res.send("Do Something on POST METHOD on /post route")
})
postRouter.put("/",(req,res)=>{
    res.send("Do Something on PUT METHOD on /post route")
})
postRouter.delete("/",(req,res)=>{
    res.send("Do Something on DELETE METHOD on /post route")
})
module.exports=postRouter