import React, { Component } from 'react';
import axios from 'axios';

function ArtCard(props){

  function saveClick(id) {
    axios.post('/api/saveart', props.wholeArt)
    console.log(props.wholeArt, "WHOLE ARTTTT")
    }

  

    const divStyle = {
        height:'500px',
        width:'200px'
    }
console.log(props, "PROPS")
    return(
       
        <div style={divStyle}>
            <img src={props.image} alt="imgSoon" />
            <h1>{props.artistName}</h1>
            {/* <p>{props.bio}</p> */}

        
        {props.parent === 'artList' ? (
            <div>
            <button onClick={saveClick}>SAVE MEEEEE</button>
            </div>
         ) : (
            <button onClick={() => props.deleteClick(props.index)}>DELETE</button>
         )}
        </div>
        )
}

export default ArtCard;