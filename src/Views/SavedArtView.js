import React, { Component } from 'react';
import axios from 'axios';
// THIS IS JUST A VIEW 
// IMPORT RELAVENT COMPONENT WHEN DONE
import ArtCard from './../components/ArtCard';
import ArtGridList from './../components/ArtGridList';


class SavedArtView extends Component{
    constructor(){
        super();
        this.state = {
            savedArt: []
        }
        //BIND
        this.deleteClick = this.deleteClick.bind(this);
    }
    componentDidMount(){
        axios.get('/api/getsavedart').then(response => {
            console.log("THIS IS THE SAVED", response)
            this.setState({
                savedArt: response.data.savedArt
            })
        })
    }

    deleteClick(id){
        axios.delete(`/api/deleteart/${id}`).then(response => {
        this.setState({ savedArt: response.data})
    })
    }

    render(){
        console.log(this, "THIS")
        let saved = this.state.savedArt;
        let savedArtList = saved.map((artS, i) => {
            return <ArtCard parent='savedArt' deleteClick={this.deleteClick} index={i} key={i} wholeArt={artS} image={artS._links.thumbnail.href} artistName={artS.name} bio={artS.biography}/>
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