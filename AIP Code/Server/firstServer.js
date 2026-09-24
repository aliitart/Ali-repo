const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <link rel="stylesheet" href="style.css">
        <head>
            <title>Course Server</title>
        </head>
        <body>
            <h1>Hello from Alison's server!</h1>
            <p>This page is being served by Node.js and Express.</p>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/api/getName', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ name: 'Alison\'s Page' });
});

/*
res.send
res.json
{name: '___"}
/*

git add .
git commit -m "__"
git push
*/

app.get('api/getImage', (req, res) => {
    res.set('Access-Control-ALLOW-origin', '*');
    res.sendFile('path/to/your/image.png');
});