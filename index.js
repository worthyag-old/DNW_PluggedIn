// The index.js file 
const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const mysql = require("mysql");
const port = 8088;

app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "School20",
    database: "PluggedIn" 
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});

global.db = db;
require("./routes/main")(app);

app.set("views",__dirname + "/views");
app.set("view engine", "ejs");

// To connect CSS
app.use(express.static(__dirname + '/views'));

app.engine("html", require("ejs").renderFile);

app.listen(port, () => console.log(`Example app listening on port ${port}!  (localhost:${port})`));