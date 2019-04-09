const bodyParser = require("body-parser");
const express = require("express");
const db = require("./db/db");

db.init();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("it's working :)");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}.`));
