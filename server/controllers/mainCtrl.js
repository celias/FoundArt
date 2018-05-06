const axios = require('axios');
const { clientSecret, apiUrl, clientID } = require('./../config');


let myArt = [];
let savedArt = [];
let saveListName = ''


axios
	.post(apiUrl, { client_id: clientID, client_secret: clientSecret })
	.then(response => {
		axios.defaults.headers.common['X-Xapp-Token'] = response.data.token;
	})
    .catch(console.log);
    
    const getArt = (req, res, next) => {
        axios
            .get(
                `https://api.artsy.net:443/api/artists?similarity_type=contemporary&artworks=true&sort=-trending&size=50&page=1`
            )
            .then(response => {
                res.status(200).json(response.data._embedded.artists)
                console.log(response.data._embedded.artists)
            })
            .catch(console.log);
    };

    // might not use
    const postArt = (req, res, next) => {
        console.log(req.body, req.params);
        const { img, name } = req.body;
        let { id } = req.params;
        art.push({ img, name, id });
        return res.status(200).json(myArt);
    };
    //GET
    const getSavedArt = (req, res, next) => {
        let newSavedArt = {
            savedArt, saveListName
        }
        res.status(200).json(newSavedArt)
    }

    //POST
    const saveArt = (req, res, next) => {
       savedArt.push(req.body);
       res.status(200).json(savedArt);
    }

    //DELETE
    const deleteArt = (req, res, next) => {
        savedArt.splice(req.params, 1)
        console.log("this is the req params", req.params)
        res.status(200).json(savedArt);
    }

    //PUT
    const updateName = (req, res, next) => {
        savedListName = req.body.name;
        
    }

    const changeName = (req, res, next) => {
        saveListName = req.body.name;
        res.status(200).json(saveListName)
    }

    
   

   


      



    // const getMoreArt = (req, res, next) => {
    //     axios.get(`https://api.artsy.net:443/api/artists?similarity_type=contemporary&artworks=true&sort=-trending&size=50&page=1`)
    //     .then(response => {
    //         console.log(response.data._embedded.artists, "This is the Artsy API Data")
    //         // art.unshift(response.data.art)
    //         res.status(200).json(art);
    //     }).catch(err => console.log('error @ FOUND:', error))
    // }

    module.exports = {
        getArt: getArt,
        postArt: postArt,
        getSavedArt: getSavedArt,
        saveArt: saveArt,
        deleteArt: deleteArt,
        updateName: updateName,
        changeName: changeName


        // getMoreArt: getMoreArt
    }