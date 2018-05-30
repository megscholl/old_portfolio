import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav>
                <span href="#designdev" className="links" alt="">design &amp; dev</span> &nbsp;&#124;&nbsp; <span href="#" className="links" alt="">about me</span> &nbsp;&#124;&nbsp; <span href="#inspirations" className="links" alt="">inspirations</span>
            </nav>
        );
    }
}

export default Nav;