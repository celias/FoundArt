import React, { Component } from 'react';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE
import ArtGridList from './../components/ArtGridList';
// import ArtCard from './../components/ArtCard';
import './../App.css';


function ArtGridView(){
    return(
        <div className="BG">
        
            <ArtGridList />
        </div>
    )
}

export default ArtGridView;