import React, { Component } from 'react';
import Reso from './images/image_of_reso.png';
import Tend from './images/tend_screen.png';
import vs from './images/ux_vs_ui.png';
import './DevDesign.css';

class DevDesign extends Component {
    render() {
        return(
          <div className="top-margin">
            <h5 className="header-left" id="designdev">design & development</h5>
            <div className="flexbox-container">
              <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={Reso} alt="screen shot of Reso by Meg Scholl" className="image-examples"/></a>
              <a href="https://github.com/megscholl/budget-tracker" alt="Tend Budget Tracker" title="Tend Budget Tracker" target="_blank"rel="noopener noreferrer"><img src={Tend} alt="screen shot of Tend by Meg Scholl" className="image-examples"/></a>
            </div>

            <br />

            <center><img src={vs} alt="UX vs UI diagram" className="image-large"/></center>
          </div>
        )
    }
}

export default DevDesign;