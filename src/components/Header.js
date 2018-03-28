import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header(){


    return (
        <div className = "navbar">
            <div className="logo">
            <h1>FOUND</h1>
            </div>
            <ul className = "nav-links">
                <Link to="/">
                    <li className="nav-l">HOME</li>
                </Link>
                <Link to="/artgrid">
                    <li  className="nav-l">ART</li>
                </Link>
                <Link to="/about">
                    <li  className="nav-l">ABOUT</li>
                </Link> 
                <Link to="/usersavedart">
                    <li  className="nav-l">SAVED</li>
                </Link>
            </ul>
        </div>
    )
}
export default Header;