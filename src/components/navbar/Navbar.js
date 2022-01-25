import React from 'react';
import './Navbar.css';
import Web from './web/Web.js';

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <nav className={`navbar-container ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-name" onClick={toTheTop}>
            Alvaro Torralba 
            </div>
            
            <div className="web-menu">
                <a href="#about">About</a>
            </div>
            
        </nav>
    );
};

export default Navbar;
