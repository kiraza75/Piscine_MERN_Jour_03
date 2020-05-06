/*const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27042/UsersDB';*/
var express = require('express');
var Users  = require("./models/users");
var app = express();


app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');



app.post("/inscription", (req, res) => {
    res.render("inscription");
});
app.listen(4242, () => {
    console.log("server on port 4242");
});