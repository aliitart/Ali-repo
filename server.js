const express = require("express");

const app = express();
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
        <link id="favicon" rel="icon" href="/icon.ico" type="image/ico">
            <title>Course Server</title>
        </head>
        <body>
            <h1>Welcome to Alison's server!</h1>
            <p>Check back for future updates ^-^</p>
            <img src = "/heart.gif" width="200">
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/api/getImage', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, "getImage.jpeg"));
});

app.get('/api/getName', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ name: 'Alison\'s site' });
});

app.get("/icon.ico", (req, res) => {
    res.sendFile(path.join(__dirname, "icon.ico"));
});

app.get("/heart.gif", (req, res) => {
    res.sendFile(path.join(__dirname, "heart.gif"));
});

/*
git add .
git commit -m "__"
git push
*/