const express = require("express");
const quotes = require("./quote.json");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.get("/api/quote", (req, res) => {
  const ranomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[ranomIndex]);
});
