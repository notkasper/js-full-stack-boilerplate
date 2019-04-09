const bodyParser = require("body-parser");
const express = require("express");
const db = require("./db");

const test = require('./handlers/test');

console.log(process.env.NODE_ENV);

db.init();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("it's working :)");
});

app.get("/api/test", test);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}.`));
