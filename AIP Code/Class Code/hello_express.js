const express = require("express");

const app = express();

const port = 3000;



/*
asks first the path, url; then what we want to do there; 
express static takes an argument, the path we want to go
join directory name where we're executing with public directory
we can have a second argument path.join(__dirname, "public"), options
options function; you can provide options
check documentation for options kinds
*/
app.use("/public", express.static(path.join(__dirname, "public")))

//if we access a file inside the public folder in the browser we will use publi/name and we will access that file directly

app.use("/public", express.static(path.join(__dirname, "public")))

//includes clickable links which send us to the static files we have added

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "hello.html"))
});

app.post("/", (req, res) => {
    res.send("Data Received")
});

app.get("/allAbout/me", (req, res) => {
    res.status(200).send("Hello, Express!");

});

app.get("/allAbout/me", (req, res) => {
    res.status(200).send("HELLO EXPRESS" + req.params.subpage)
});

//codes at end to check if everythin requested works or not
app.use((req,res) =>{
    res.status(404).sendFile(__dirname + "public/404.html")
}) //page not found

//has parameter error
//first param err then 4th param is what it throws
app.use((err, req,res, __) =>{
    console.log(err.stack)
    res.status(500).sendFile(__dirname + "public/500.html")
})
/*
505 at the very end because we need to catch 404 first
log into console some error which tells the user
doesn't crash and we're ready for the next request
last param __ not real purpose, only there to make a 4th variable signature
if we didn't have it then:
1st request
2nd response
3rd next function
3rd tells us you reached this point now go to the next handler
*/