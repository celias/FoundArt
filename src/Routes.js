import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashView from './Views/SplashView'; // HOME // SPLASH IMAGE NOT THE ART GRID
import AboutView from './Views/AboutView'; // ABOUT THE SITE NOT THE ART
import ArtGridView from './Views/ArtGridView'; // THE ARTWORK GRID LAYOUT
import SavedArtView from './Views/SavedArtView'; // USER SAVED ARTS LIKE CARDS
import IndividualArtworkView from './Views/IndividualArtworkView'; // WHEN AN IMG IS CLICKED IT GIVES INFO ABOUT THE ART

export default(
    <Switch>
        <Route exact path='/' component={SplashView}/>
        <Route path='/artgrid' component={ArtGridView}/>
        <Route path='/about' component={AboutView}/>
        <Route path='/usersavedart' component={SavedArtView} />
        <Route path = '*' render = { () => {
            <div>
                <p> 404 not found </p>
            </div>
        } } />    

   </Switch>
)
