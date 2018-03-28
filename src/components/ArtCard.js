import React, { Component } from 'react';
import axios from 'axios';

import './ArtCard.css';

function ArtCard(props){

  function saveClick(id) {
    axios.post('/api/saveart', props.wholeArt)
    console.log(props.wholeArt, "WHOLE ARTTTT")
    }

  


console.log(props, "PROPS")
    return(
       
        <div className="art-card">
        
            <div className="img">
            <img src={props.image} alt="imgSoon" />
            </div>
            
            <div className="name">
            <h1>{props.artistName}</h1>
            {/* <p>{props.bio}</p> */}
            </div>
            

        
        {props.parent === 'artList' ? (
            <div>
            <button className="name-btn" onClick={saveClick}>Like</button>
            </div>
         ) : (
            <button onClick={() => props.deleteClick(props.index)}>DELETE</button>
         )}
        </div>
        )
}

export default ArtCard;