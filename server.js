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
app.post("/api/notes", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json")) || [];
    let newID = notesDB.length + 1;
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: newID
    }

    // PUSH new note to notes
    notes.push(newNote);

    // FS to write new note to db
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
    });

    return res.json(notes);
});

// DELETE note
app.delete("/api/notes/:id", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json")) || [];
    let id = notesBD.length.id;

    for (let i = 0; i < notes.length; i++) {
        if (notesDB[i].id !== parseInt(req.params.id)) {
            notes.push(notesDB[i]);
        };
    };
    
    // FS to write notes WITHOUT above id to db
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
    });

    return res.json(notes);
})

// Set listener for port
app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
  });

// RUN NODE SERVER.JS