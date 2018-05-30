import React, { Component } from 'react';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div className="wrap-text-center">
             <h5 className="header-center readmore-box">About Me</h5>
             <p>This is my about me :P :D This is my about me :P :D This is my about me :P :D This is my about me :P :D This is my about me :P :D This is my about me :P :D This is my about me :P :D </p>
             <p className="read-more"><a href="" className="button">Read More</a></p>
            </div>
        )
    }
}

export default AboutMe;