import React, { Component } from 'react';
import WyfyImg from './images/wyfy.PNG';
import './DevDesign.css';

class Wyfy extends Component {
    render() {
        return(
            <div className="wyfy-project-width">
                <img src={WyfyImg} alt="screen shot of NSS C24 Pitch Perfect WyFy app" className="wyfy-image zoom"/>
                <p className="wrap-wyfy-text"><span className="drop-cap">M</span>y role with <strong>Wyfy</strong> was voted Team Leader in the most complex design and development project we'd ever had. Our Pitch Perfect presentation was to win the interest of four Tennessee State Professionals, ranging in IT to marketing research.
                </p>

            </div>
        )
    }
}

export default Wyfy;