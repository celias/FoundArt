import React, { Component } from 'react';
import axios from 'axios';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE
import ArtCard from './../components/ArtCard';


class SavedArtView extends Component{
    constructor(){
        super();
        this.state = {
            savedArt: []
        }
        //BIND
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        axios.get('/api/getSavedArt').then(response => {
            console.log("THIS IS THE SAVED", response)
            this.setState({
                // savedArt: response
            })
        })
    }

    handleClick(id){
        axios.post(`/api/saveArt/${id}`, {save: this.state.saveArt} ).then(response => console.log(response))
    }

    render(){
        let saved = this.state.savedArt;
        let savedArtList = saved.map((artSaved, i) => {
            return <ArtCard key={i} index={i} image={artSaved._links.thumbnail.href} wholeArt={artSaved} />
        })

        return(
            <div>
            {/* <div>
                <button onClick={this.handleClick}>SAVE ART</button>
                </div> */}
            <div>
                {savedArtList}
                </div>
                </div>
        )
    }
}





// function SavedArtView(){
//     return(
//         <div className="saved-art-container">
//             <h1>THIS IS THE USER SAVED ART VIEW</h1>
            
//         </div>
//     )
// }

export default SavedArtView;