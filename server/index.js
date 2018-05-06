const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');

const functions = require('firebase-functions');

const port = 3001;
const app = express();

app.use(json());
app.use(cors());

// ALL CONTROLLERS FROM MAIN CTRL GO HERE
const { getArt, postArt, getSavedArt, saveArt, deleteArt, changeName } = require('./controllers/mainCtrl');

app.get('/api/getart', getArt);
// app.get('/api/getMoreArt', getMoreArt);
app.post('/api/postart/:id', postArt) // not using
app.get('/api/getsavedArt', getSavedArt);
app.post('/api/saveart', saveArt)
app.delete('/api/deleteart/:id', deleteArt)
app.put('/api/changename', changeName)

// GET ARTIST BIO?
// GET getSavedArt
// POST postSavedArt
// some PUT
// some DELETE

app.listen(port, () => {
    console.log(`Listening to sweetness on port: ${port}`);
});
