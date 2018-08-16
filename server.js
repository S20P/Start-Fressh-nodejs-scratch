var express = require('express'); //Importing Express
var app = express(); //Getting App From Express
var fs = require('fs'); //Importing File System Module To Access Files
const port = 8080; //create A port
app.listen(process.env.PORT || port); //http://localhost:port/

app.get('/', function(request, response) {
    //Telling Browser That thr File Provided Is A HTML File
    response.writeHead(200, { "Content-Type": "text/html" });
    //Passing HTML To Browser
    response.write("The Server IS <strong>Working</strong><br>!");

    response.write(fs.readFileSync("./public/index.html"));
    //Ending Response
    response.end();
})


app.use(express.static(__dirname + '/public'));

console.log("Server Running At:localhost:" + port);