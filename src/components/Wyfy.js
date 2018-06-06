import React, { Component } from 'react';
import WyfyImg from './images/wyfy.PNG';
import './DevDesign.css';

class Wyfy extends Component {
    render() {
        return(
            <div className="wyfy-project-width">
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={WyfyImg} alt="screen shot of Reso by Meg Scholl" className="wyfy-image zoom"/></a>
                <p className="wrap-wyfy-text"><span className="drop-cap">M</span>y role with <strong>Wyfy</strong> was voted Team Leader in the most complex design and development project we'd ever had. Our Pitch Perfect presentation was to win the interest of four Tennessee State Professionals, ranging in IT to marketing research.
                </p>

            </div>
        )
    }
}

export default Wyfy;