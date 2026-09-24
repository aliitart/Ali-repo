const http = require("http");
const fs = require("fs");
const http = require("http"); //require http modules that ships with node


const hostname = '127.0.0.1';
const port = 3000;

let mimeLookup = {
    'js': 'text/javascript',
    'html': 'text/html',
    'jpg': 'image/jpeg',
}

function send404(response){
    response.writeHead(404, {'Content-Type':'text/plain'});
    response.write("Error 404: Resource not found")
    response.end();
}
const server = http.createServer( (req, res) => { //callback function to define what the server should do when request comes in
   
    //we need to find out what file is being requested
    let file_url =(req.url == "/") ? "hello.html" : decodeURI(req.url)
    //decodeURI() to decode the file, might have some characters we don't know
    //why is this a problem?
    let filepath = path.join(__dirname, "public",file_url);
    //__dirname -> special variable that contains the path of the directory in which you execute this file
    
    //catch the bad case if file path actually exist or not
    if(!fs.existsSync(filepath)){
        send404(res)
        return
    }

    let fileExt = path.extname(filepath)
    
    //instead of writing nested if statements, write a lookup table
    let mimeType = mimeLookup[fileExt]

    if(!mimeType){
        send404(res)
        return
    }
    //if we pass this stament we're good to give the file

    res.writeHead(200, {'Content-Type' : mimeType});
    fs.createReadStream(filepath).pipe(res);
});



server.listen(port, hostname, () => { //callback function to define what to do once the server has started running
    //()=> empty arguments function says we don't care what the server is doing, just excecute callback function
    console.log(`Server running at http://${hostname}:${port}`); //tells server where to listen 
});

//big security risks of using decodeURI() because it allows for directory traversal attacks, and also the code is not very readable
//and non maintainable because of the nested if statements.
