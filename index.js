const express=require("express");
const chats=require("./data/data");
const app=express();

app.use(express.json());

app.get("/", (req,resp)=>{
    resp.send("api is working");
})

app.get("/chat", (req,resp)=>{
    resp.send(chats);
})

app.get("/chat/:id", (req,resp)=>{
    const data=chats.find((e)=>e._id===req.params.id);
    resp.send(data);
})

app.listen(8080);