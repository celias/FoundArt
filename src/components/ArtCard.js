import React, { Component } from 'react';

function ArtCard(props){
    const divStyle = {
        height:'1000px',
        width:'200px'
    }

    return(
        <div style={divStyle}>
            <img src={props.image} alt="imgSoon" />
            <h1>{props.artistName}</h1>
            <p>{props.bio}</p>
        </div>
    )
}

export default ArtCard;