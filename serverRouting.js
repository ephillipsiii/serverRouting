var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});

function handleRequest(req, res){

var path = req.url;
var page = "";

    switch (path) {
        case "/":
            page = "/index.html";
        break;
        case "/food":
            page = "/food.html";
        break;
        case "/movies":
            page = "/movies.html";
        break;
        case "/favCSS":
            page = "/favCSS.html";
        break;
        }
    fs.readFile(__dirname + page, function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
        }
)};




