const express=require("express");
const app=express();

app.get("/test", (req,resp)=>{
    resp.send("working");
})

app.listen(8080);