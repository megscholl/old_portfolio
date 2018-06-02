import React, { Component } from 'react';
import ResoImg from './images/image_of_reso.png';
import './DevDesign.css';

class Reso extends Component {
    render() {
        return(
            <div className="project-width">
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={ResoImg} alt="screen shot of Reso by Meg Scholl" className="image-examples zoom"/></a>

                <p className="wrap-text"><span className="drop-cap">G</span>uests of any restaurant making a reservation should have the ability to visit with their loved ones rather than waiting in line, just to wait longer for their reserved tables. <strong>Reso</strong> allows a user to create, read, update and delete reservations at their favorite Nashville restaurants. Thirteen regular reservation-makers were interviews and asked a series of questions regarding their experiences at restaurants, which helped the design and development of Reso.</p>
            </div>
        )
    }
}

export default Reso;