const express=require("express");
const app=express();

app.get("/",(req, res)=> {
    res.send("Home Page of express");
});

app.get("/about",(req, res)=> {
    res.send("About Page of express");
});

app.get("/user", (req, res)=> {
    res.json({name:"Prashant", role:" Express Developer"});
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
});