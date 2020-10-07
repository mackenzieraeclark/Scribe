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
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// POST new note

// DELETE note

// Set listener for port

// RUN NODE SERVER.JS