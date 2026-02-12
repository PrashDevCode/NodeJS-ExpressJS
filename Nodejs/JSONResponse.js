const http=require("http");

http.createServer((req, res)=> {
    res.setHeader('content-Type','application/json');

    const data={name: "Prashant", role:"Developer"};

    res.end(JSON.stringify(data));
}).listen(3000);