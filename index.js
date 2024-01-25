const express = require('express');
const ytsearch = require('ytsearch');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }

    ytsearch(searchTerm, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(result);
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
