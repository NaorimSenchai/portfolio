// MODULE IMPORTS
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
var bodyParser = require('body-parser');
require("dotenv").config();


// EXTERNAL SCRIPTS IMPORTS
const mail = require("../routes/mail");

// SERVER SETTINGS
app.set("views engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

// --- ROUTES SETTINGS
// app.use("/admin", mail);
app.get("/", (req, res) => {
    res.render("pages/index.ejs");
});
app.get("/projects", (req, res) => {
    res.render("pages/projects.ejs");
});
app.get("/sharables", (req, res) => {
    res.render("pages/sharables.ejs");
});
app.get("/history", (req, res) => {
    res.render("pages/history.ejs");
});

// DATABASE LAUNCHING


// SERVER LAUNCHING
app.listen(process.env.PORT, () => console.log(`Server started on http://www.localhost:${process.env.PORT}`));
