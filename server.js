const express = require("express");

const app = express();
const path = require("path");
const fs = require("fs");
const multiparty = require("multiparty");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

/*
Static files
*/
//serve static files from different directories
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "styles")));
app.use(express.static(path.join(__dirname, "pages")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "docs")));

/*
Routing of server pages
*/
//route to the different page addresses
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'))
})

app.get("/account", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', "account.html"))
})

app.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'album.html'))
})

app.get('/application', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', "application.html"))
})

app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', "feedback.html"))
})

/*
Course website appearance
*/
//let image and name be displayed in classroom server
app.get('/api/getImage', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, "getImage.jpeg"));
});

app.get('/api/getName', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ name: 'Tempo' });
});

/*
Log in handler
*/
//check if login is valid by testing it against a provided password
app.post('/login', (req, res) => {
    const password = req.body.psw;
    const validPassword = "123Tempo";

    if (password === validPassword) {
        res.send(JSON.stringify({
            message: "Log in Success "
        }))
    } else {
        res.send(JSON.stringify({
            message: "Incorrect Password"
        }))
    }
})

