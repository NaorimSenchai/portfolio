// MODULE IMPORTS
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const knex = require("./models/knexClient");
const bodyParser = require('body-parser');
require("dotenv").config();

// EXTERNAL SCRIPTS IMPORTS
const mail = require("./routes/mail");

// SERVER SETTINGS
app.set("views engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

// --- ROUTES SETTINGS
// app.use("/admin", mail);
app.get("/", async (req, res) => {
	res.render("pages/index.ejs");
});
app.get("/projects", async (req, res) => {
	try {
		const data = await knex('project').select();
		console.log(data);
		res.render("pages/projects.ejs", {data});
	} catch (err) {
		res.send(err.message);
	};
});
app.get("/sharables", async (req, res) => {
	try {
		const data = await knex('sharable').select();
		console.log(data);
		res.render("pages/sharables.ejs", {data});
	} catch (err) {
		res.send(err.message);
	};
});
app.get("/history", async (req, res) => {
	try {
		const data = await knex('history').select();
		console.log(data);
		res.render("pages/history.ejs", {data});
	} catch (err) {
		res.send(err.message);
	};
});
app.get("/contact", async (req, res) => {
	res.render("pages/history.ejs");
});

// SERVER LAUNCHING
app.listen(process.env.PORT, () => console.log(`Server started on http://www.localhost:${process.env.PORT}`));
