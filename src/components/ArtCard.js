import React, { Component } from 'react';
import axios from 'axios';

function ArtCard(props){

  function saveClick(id) {
    axios.post('/api/saveart', props.wholeArt)
    console.log(props.wholeArt, "WHOLE ARTTTT")
    }

    const divStyle = {
        height:'1000px',
        width:'200px'
    }
console.log(saveClick, "WHAT AM I SAVING?")
    return(
       
        <div style={divStyle}>
            <img src={props.image} alt="imgSoon" />
            <h1>{props.artistName}</h1>
            <p>{props.bio}</p>
            <button onClick={saveClick}>SAVE MEEEEE</button>
            <button onClick={() => props.deleteClick(props.index)}>DELETE</button>
        </div>
        
            
       
    )
}

export default ArtCard;