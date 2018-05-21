import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <nav>
                <span href="#" className="links" alt="">design &amp; dev</span> &nbsp;&#124;&nbsp; <span href="#" className="links" alt="">about me</span> 
            </nav>
        );
    }
}

export default Nav;