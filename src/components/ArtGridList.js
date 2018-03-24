import React, { Component } from 'react';
import axios from 'axios';

import ArtCard from "./ArtCard"

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

        let newArtImage = this.state.artworks.map((art, i) => {
            console.log(art, "NEW ART IMAGE!!!!")
            return(
                <div key={i}>
                   <ArtCard saveClick={art} wholeArt={art} image={art._links.thumbnail.href} artistName={art.name} bio={art.biography}/>

                </div>
            )
        })
        
            return (
                <div style={{height:'100vh',width:'100vw'}}>
                {newArtImage}
                </div>
        )
      
    }
}
export default ArtGridList;