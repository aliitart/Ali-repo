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

/*
Route parameters
*/
//let user download the recruitment form from the server
app.get('/public/:filename', (req, res) => {
    let file = req.params.filename;
    let filepath = path.join(__dirname, "public", file);

    if (!fs.existsSync(filepath)) {
        res.status(404).sendFile(__dirname + '/pages/404.html');
        return;
    }
    //if an error occurs display the error message
    res.download(filepath, file, (err) => {
        if (err) {
            console.log("Download error");
            res.write(`Error downloading the file ${file}`)
            res.end();
        }
    })
});

/*
Handle form data (application form)
*/
//fields that are accepted as uploads
const validFields = {
    name: " ",
    dob: " ",
    email: " ",
    phone: " ",
    myFile: "application/pdf"
};
let file_path = path.join(__dirname, "docs");

if (!fs.existsSync(file_path)) {
    res.status(404).sendFile(__dirname + '/pages/404.html');
    return;
}

//let user upload forms to docs file in server
app.get('/application/form', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "application.html"))
});

app.post('/submitted', (req, res) => {
    let form = new multiparty.Form({ autoFields: true });
    //check the fields of the form to be uploaded
    form.on("field", (name, value) => {
        Object.keys(validFields).forEach((valid_name) => {
            if (valid_name === name) {
                validFields[valid_name] = value;
            }
        });
    });

    //check if file has the correct name, type and size
    form.on("part", (part) => {
        console.log(part.headers);
        if (part.headers["content-type"] !== "application/pdf") {
            res.status(418);
            res.send(JSON.stringify({
                message: "Invalid file type, must be PDF"
            }))
            part.resume();
            return
        }
        if (part.name !== "myFile") {
            part.resume();
            return
        }
        //save file in docs folder
        part.pipe(fs.createWriteStream(path.join(__dirname, "./docs", part.filename)));
        console.log("File saved");
    });
    //use ajax to send a message about submitted form without reloading the page
    form.on("close", () => {
        res.send(JSON.stringify({
            message: "Form submitted successfully"
        }))
    });

    form.parse(req);
});

//feedback form submission handler
const feedbackFields = {
    name: " ",
    dob: " ",
    email: " ",
    phone: " "
};

app.post('/thanks', (req, res) => {
    let form = new multiparty.Form({ autoFields: true });
    //check the fields of the form to be uploaded
    form.on("fields", (name, value) => {
        Object.keys(feedbackFields).forEach((valid_name) => {
            if (valid_name === name) {
                feedbackFields[valid_name] = value;
            }
        });
    });
    form.on("close", () => {
        res.sendFile(path.join(__dirname, 'pages', "thanks.html"))
    });
    form.parse(req);
});

/*
Custom codes
*/
//custom 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/pages/404.html');
});

//custom 500
app.use((req, res) => {
    res.status(500).sendFile(__dirname + '/pages/500.html');
})

/*
Console
*/
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});
