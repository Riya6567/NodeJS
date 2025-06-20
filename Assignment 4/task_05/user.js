const express=require("express")
const userRouter=express.Router()
const users=[
    {"name":"John","id":1},
    {"name":"Mohn","id":2},
    {"name":"Kohn","id":3},
    {"name":"Sohn","id":4}
]
userRouter.get("/",(req,res)=>{
    res.json(users)
})
userRouter.get("/:id",(req,res)=>{    
    const finduser=users.find((item)=>item.id==req.params.id)   
    if(finduser) 
        res.json(finduser)
    else
        res.json({"msg":"User Not Found"})
})
userRouter.post("/",(req,res)=>{
     const newUser=req.body
     users.push(newUser)
     res.json(users)
})
userRouter.put("/",(req,res)=>{
    res.send("Do Something on PUT METHOD on /user route")
})
userRouter.delete("/:id",(req,res)=>{
    const findindex=users.findIndex((item)=>item.id==req.params.id)
    console.log(findindex);
    users.splice(findindex,1)
    res.json(users)
})
module.exports=userRouter