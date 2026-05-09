const express=require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Hello from middleware");
    next();
});

app.get("/", (req, res)=> {
    res.send("<h1> Home Page </h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1> About Page </h1>");
}); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
