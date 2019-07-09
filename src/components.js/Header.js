import React from 'react';
// import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="NavBar">
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="titleName">
                <h1>Vivien Renee</h1>
            </div>
            <div className="jobTitle">
                <p>Work In Progress</p>
            </div>          
        </div>
        
    );
}

export default Header;