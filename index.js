const express = require("express");
const app = express();
var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('ASWIN SPARKY API');
    res.end();
}).listen(process.env.PORT || 3000);
