import React, { Component } from 'react';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE
import ArtGridList from './../components/ArtGridList';
import ArtCard from './../components/ArtCard';


function ArtGridView(){
    return(
        <div className="grid-art-container">
            <h1>THIS IS A GRID SPLASH VIEW OF ART</h1>
            <ArtGridList />
        </div>
    )
}

export default ArtGridView;