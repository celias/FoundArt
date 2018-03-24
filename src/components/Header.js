import React,{Component} from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <div className = "header-component-div">
            
            <div className = "nav-div-in-header">
                <Link to="/" className="nav-links">
                    <li>HOME</li>
                </Link>
                <Link to="/artgrid" className="nav-links">
                    <li>ART</li>
                </Link>
                <Link to="/about" className="nav-links">
                    <li>ABOUT</li>
                </Link> 
                <Link to="/usersavedart" className="nav-links">
                    <li>SAVED</li>
                </Link>
            </div>
        </div>
    )
}
export default Header;