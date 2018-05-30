import React, { Component } from 'react';
import ResoImg from './images/image_of_reso.png';
import './DevDesign.css';

class Reso extends Component {
    render() {
        return(
            <div>
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={ResoImg} alt="screen shot of Reso by Meg Scholl" className="image-examples zoom"/></a>

                <p className="wrap-text">Guests of any restaurant making a reservation should have the ability to visit with their loved ones rather than waiting in line, just to wait longer for their reserved tables. Reso allows a user to create, read, update and delete reservations at their favorite Nashville restaurants. Thirteen regular reservation-makers were interviews and asked a series of questions regarding their experiences at restaurants, which helped the design and development of Reso. <a href="https://docs.google.com/presentation/d/e/2PACX-1vTuWjN4sky9Xgdl1esGTv25hqZiYW_ohVE9tM5KnYOC6uT746KrUzKmv0yCXOW9D_QmG6WFH7iqvoB-/pub?start=true&loop=false&delayms=3000" target="_blank" alt="Reso Google Drive Slides Presentation" title="Reso Google Drive Slides Presentation"  rel="noopener noreferrer" className="project-links">To find more information about the design implementations of Reso, visit the Google Drive Slides presentation here.</a> </p>
            </div>
        )
    }
}

export default Reso;