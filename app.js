// require dependencies

const express = require("express");
const hbs = require("hbs");

// initialize app object
const app = express();

// do app config
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//setup app routes
app.get("/home", (req, res) => {
    res.render("home");

});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/sites", (req, res) => {
    res.render("sites");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("*", (req, res) => {
    res.send("sorry not found");
});


//MIDDLEWARE YOUTUBE
function logger(req, res, next) {
    console.log('Log');
    next()
}




// kickstart the http server
app.listen(3000, () => {
    console.log("ready @ http://localhost:3000");
});