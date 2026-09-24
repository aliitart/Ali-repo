const http = require("http"); //require http modules that ships with node


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => { //callback function to define what the server should do when request comes in
    //res.write("Hello, Node.");
    //res.end(); //tells http that it's time to send back the response to client
    let method = req.method + " ";
    let url = req.url + "\n\n";
    //if something else is added in url, a page not found will show
    let headers = JSON.stringify(req.headers ,null, 4);

    res.writeHead(200, {'Content-Type' : '/text/plain'});
    res.write(method);
    res.write(url);
    res.write(headers);
    res.end();
}); 

server.listen(port, hostname, () => { //callback function to define what to do once the server has started running
    //()=> empty arguments function says we don't care what the server is doing, just excecute callback function
    console.log(`Server running at http://${hostname}:${port}`); //tells server where to listen 
});

/*
Use nxp nodemon hello_node.js for auto-restart of server changes
use nodemon server.js for automatic restarts after making changes 
Alternatively install nodemon only for your
project:
npm install --save-dev nodemon
But then you must use:
npx nodemon app.js
“Advantage”: nodemon is tracked in your package.json
*/