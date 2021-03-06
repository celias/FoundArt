import React, { Component } from 'react';
import axios from 'axios';

import ArtCard from "./ArtCard";
import './ArtCard.css';
class ArtGridList extends Component {
    constructor(){
        super();

        this.state = {
            artworks: [],
            artImage: []
        }
        this.showArt = this.showArt.bind(this);
        // this.getMoreArt = this.getMoreArt.bind(this);
    }

    componentDidMount(){
        axios.get('/api/getArt').then(response => {
            console.log(response.data, "COMPONENT DID MOUNT")
            this.setState({artworks: response.data})
        }).catch( err => console.log(err))
    }

    // getMoreArt(){
    //     axios.get('/api/getMoreArt').then(response => {
    //         console.log(response.data, "THIS IS ART")
    //         this.setState({artworks: response.data._embedded.artists})
    //     }).catch(err => console.log(err))
    // }

     

        showArt(item){
            axios.post(`/api/postArt/${item.id}`,
        { artimg: item._links.thumbnail.href, artistname: item.name } )
        .then(response => {
            console.log(response.data)
        }).catch(console.log)
        }
    

   



    render(){
 
        // let newArtwork = this.state.artworks.map((art, i) => {
        //     console.log(this.state)
        //     return (
        //         <div key={i} />
        //     )})
// Parent='artList' is what makes the conditional render logic PROPS PROPS PROPS
        let newArtImage = this.state.artworks.map((art, i) => {
            console.log(this, "THIS LIST")
            return(
                
                <div key={i}>
                <div>
                   <ArtCard parent='artList' wholeArt={art} image={art._links.thumbnail.href} artistName={art.name} bio={art.biography}/>
                </div>
                </div>
            )
        })
        
            return (
                <div className="art-cards">
                <div>
                {newArtImage}
                </div>
                </div>
        )
      
    }
}
export default ArtGridList;