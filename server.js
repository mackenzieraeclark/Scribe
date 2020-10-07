// Set Dependencies
let express = require("express");
let path = require("path");
let fs = require("fs");

// Set up Express App
let app = express();
let PORT = process.env.PORT || 3000;
let notesDB = require('./db/db.json');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to HTML docs using GET
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Route to API
app.get("/api/notes", (req, res) => {
    res.json(notesDB);
});

// POST new note
app.get("/api/notes", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = {
        title: req.body.title,
        text: req.doby.text,
        id: notesDB.length + 1
    }

    // PUSH new note to notes
    notes.push(newNote);

    // FS to write new note to db
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        //console.log("Error writing new note");
    });

    return res.json(notes);
});

// DELETE note

// Set listener for port

// RUN NODE SERVER.JS