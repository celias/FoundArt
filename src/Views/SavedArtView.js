import React, { Component } from 'react';
import axios from 'axios';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE


class SavedArtView extends Component{
    constructor(){
        super();
        this.state = {
            savedArt: []
        }
        //BIND
    }
    componentDidMount(){
        axios.get('/api/getSavedArt').then(response => {
            console.log("THIS IS THE SAVED", response)
            this.setState({
                savedArt:response.data.savedArt
            })
        })
    }
}





function SavedArtView(){
    return(
        <div className="saved-art-container">
            <h1>THIS IS THE USER SAVED ART VIEW</h1>
            
        </div>
    )
}

export default SavedArtView;