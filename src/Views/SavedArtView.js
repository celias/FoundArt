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
            savedArt: [],
            saveName: '',
            value: ''
           
        }
        
        //BIND
        this.deleteClick = this.deleteClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount(){
        axios.get('/api/getsavedart').then(response => {
            console.log("THIS IS THE SAVED", response)
            this.setState({
                savedArt: response.data.savedArt,
                saveName: response.data.saveListName
            })
        })
    }

    deleteClick(id){
        axios.delete(`/api/deleteart/${id}`).then(response => {
        this.setState({ savedArt: response.data})
        })
    }

    handleInputChange(e){
        console.log(e.target.value)
        this.setState({saveName: e.target.value})
        // e.preventDefault();
        
    }
    
    handleSubmit(e){
        console.log(this.state, "DAMMIT")
        axios.put('/api/changename', {name: this.state.saveName}).then(response => console.log(response))

    }

    render(){
        console.log(this, "THIS")
        let saved = this.state.savedArt;
        let savedArtList = saved.map((artS, i) => {
                    
            
            return <ArtCard parent='savedArt' deleteClick={this.deleteClick} index={i} key={i} wholeArt={artS} image={artS._links.thumbnail.href} artistName={artS.name} bio={artS.biography}/>
        })
                    const divStyle = {
                    height:'500px',
                    width:'200px',
                    color: 'black',
                    fontFamily: 'monospace'
                    }

        return(
            <div>
            <div style={divStyle}>
       <div>
           <input type='text' value={this.state.saveName} onChange={(e) => this.handleInputChange(e)}></input>
           <button onClick={this.handleSubmit}>Submit</button>
           <br/>
          <h1>{this.state.saveName}</h1>
           </div>
            <div>
                {savedArtList}
                </div>
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