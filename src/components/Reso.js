import React, { Component } from 'react';
import ResoImg from './images/image_of_reso.png';
import ResoTechs from './ResoTech';
import './DevDesign.css';

class Reso extends Component {
    render() {
        return(
            <div className="project-width">
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={ResoImg} alt="screen shot of Reso by Meg Scholl" className="image-examples zoom"/></a>

                <ResoTechs />
                <p className="wrap-text"><span className="drop-cap">C</span>reate, read, update and delete reservations to your favorite restaurants with <strong>Reso</strong>.
                </p>

            </div>
        )
    }
}

export default Reso;