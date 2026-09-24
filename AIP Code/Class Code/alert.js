const http = require("http");
const fs = require("fs");
const http = require("http"); //require http modules that ships with node


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => { //callback function to define what the server should do when request comes in
   
    //we need to find out what file is being requested
    
    let filepath = path.join(__dirname, "/public/hello.html");
    //__dirname -> special variable that contains the path of the directory in which you execute this file
    res.writeHead(200, {'Content-Type' : '/text/plain'});
    fs.createReadStream(filepath).pipe(res);
});



server.listen(port, hostname, () => { //callback function to define what to do once the server has started running
    //()=> empty arguments function says we don't care what the server is doing, just excecute callback function
    console.log(`Server running at http://${hostname}:${port}`); //tells server where to listen 
});