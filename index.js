const express = require("express");
const app = express();
var http = require('http');
const lol = require('lolkil-scraper');
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
};
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/kop/index.html");
})
//
const coder = "ASWIN SPARKY"
msg = {
  noApikey: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter API KEY'
    }
  },
  invalidApikey: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid apikey!!, Enter a valid Api key'
    }
  },
  limit: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Your Limit Over Try after 24 hours oombiko☠️🤝🏻'
    }
  },
  error: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Oops!!, looks like something went wrong!!'
    }
  },
  noNumber: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Number'
    }
  },
  invalidNumber: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid number'
    }
  },
  noSearch: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter a name to Search'
    }
  },
  noFile: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter file Name'
    }
  },
  noLang: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Language'
    }
  },
  noText: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Text'
    }
  },
  noManga: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Manga Name'
    }
  },
  NoEmoticon: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter A Emoji'
    }
  },
  
  noAnime: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Anime Name'
    }
  },
   noTitle: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter Tittle'
    }
  },
  noCity: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter city name'
    }
  },
  noUrl: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter a URL'
    }
  },
  invalidUrl: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid URL! Make sure the URL you enter is correct!'
    }
  },
  noExtension: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Enter extension'
    }
  },
  invalidExtension: {
    statusCode: 404,
    coder: coder,
    error: {
      message: 'Invalid extension, enter extension parameters correctly extension available [ audio & video ]'
    }
  }
};
//
app.set("json spaces", 4)
/*
app.get('/downloader/youtube_dl_mp4', async (req, res, next) => {
  try {
    const url = req.query.url;
    if (!url) return res.json(msg.noUrl);
    if (!isUrl(url)) return res.json(msg.invalidUrl); 
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
app.get('/downloader/yt_video', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(msg.noSearch);
    lol.download.youtube_play_mp4(search)
    .then(async data => {
      var result = {
        statusCode: 200,
        coder: coder,
        result: data.result
      };
      res.json(result);
    })
    .catch(err => {
      res.json(msg.error);
    });
  } catch (err) {
    console.log(err);
    res.json(msg.error);
  }
});
//
let port = "3000"
app.listen(3000, () => {
  console.log(`App Listed on Port ${port}`);
})
