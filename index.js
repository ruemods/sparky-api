const express = require("express");
const app = express();
var http = require('http');
const lol = require('lolkil-scraper');

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/kop/index.html");
})
/*
app.get('/downloader/youtube_dl_mp4', async (req, res, next) => {
  try {
    const apikey = req.query.apikey;
    const url = req.query.url;
    if (apikey === undefined) return res.json(msg.noApikey);
    const check = await cekKey(apikey);
    if (!check) return res.json(msg.invalidApikey);
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
    const limit = await isLimit(apikey);
    if (limit) return res.json(msg.limit);
    addRequest();
    lol.download.youtube_dl_mp4(url)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data
      };
      res.json(result);
      limitAdd(apikey);
    })
    .catch(err => {
      res.json(msg.error);
    });
    
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
*/
app.listen(3000, () => {
  console.log(`Example app listening...`);
})
