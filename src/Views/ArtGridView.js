import React, { Component } from 'react';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE
import ArtGridList from './../components/ArtGridList';
import './../Views/ArtGridView.css';


function ArtGridView(){
    return(
        <div className="bgColor">
        
            <ArtGridList />
        </div>
    )
}

export default ArtGridView;