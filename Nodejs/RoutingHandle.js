const http=require("http");

const server=http.createServer((req, res)=> {

    if(req.url==="/") {
        res.end("Home page");
    } else if(req.url==="/about") {
        res.end("About page");
    } else {
        res.statusCode=404;
        res.end("Page not found");
    }

});

server.listen(3000);