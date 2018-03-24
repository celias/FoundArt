const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');

const port = 3001;
const app = express();

app.use(json());
app.use(cors());

// ALL CONTROLLERS FROM MAIN CTRL GO HERE
const { getArt, postArt, getSavedArt } = require('./controllers/mainCtrl');

app.get('/api/getArt', getArt);
// app.get('/api/getMoreArt', getMoreArt);
app.post('/api/postArt/:id', postArt)
app.get('/api/getSavedArt', getSavedArt);

// GET ARTIST BIO?
// GET getSavedArt
// POST postSavedArt
// some PUT
// some DELETE

app.listen(port, () => {
    console.log(`Listening to sweetness on port: ${port}`);
});

