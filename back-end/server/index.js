const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const db = require("./database");
const test = require("./handlers/test");

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

db.init();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./static"));

app.get("/api/test", test);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}.`));
