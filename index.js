const express = require("express");
const app = express();
var http = require('http');

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/kop/index.html");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
