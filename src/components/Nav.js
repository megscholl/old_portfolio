import React, { Component } from 'react'
import {
    NavLink
 } from 'reactstrap';

import LinkedIn from './images/linkedin.png';
import Github from './images/github.png';
import Email from './images/email.png';
import './Nav.css'

class Navigation extends Component {


render() {
    return (
            <div className="navbar navbar-fixed-bottom ">
                <nav id="bottom-nav container">
                    <NavLink to="/about"  className="links" alt="">about me</NavLink>&#124; 
                    <NavLink to="/redhood"  className="links mx-auto" alt="">design & development</NavLink>

                    <div className="footer-flex-container">

                        <a href="https://www.linkedin.com/in/meg-scholl" target="_blank" rel="noopener noreferrer" alt="meg scholl's linked in profile" title="meg scholl's linked in profile">
                            <img src={LinkedIn} alt="linked in icon" className="footer-icons"/>
                        </a>

                        <a href="https://www.github.com/megscholl" target="_blank" rel="noopener noreferrer" alt="meg scholl's github profile" title="meg scholl's github profile">
                            <img src={Github} alt="github icon" className="footer-icons"/>
                        </a>

                        <a href="mailto:meghan.e.scholl@gmail.com" target="_blank" rel="noopener noreferrer" alt="send meg scholl an email" title="send meg scholl an email">
                            <img src={Email} alt="email icon" className="footer-icons"/>
                        </a>

                    </div>
                </nav>
            </div> 
        
    );
    }
}

export default Navigation;