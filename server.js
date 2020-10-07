// Set Dependencies

let express = require("express");
let path = require("path");

// Set up Express App
let app = express();
let PORT = process.env.PORT || 3000;
let notesDB = require('./db/db.json');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));