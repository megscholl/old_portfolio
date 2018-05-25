import React, { Component } from 'react';
import vs from './images/ux_vs_ui.png';
import Reso from './Reso';
import Tend from './Tend';
import './DevDesign.css';

class DevDesign extends Component {
    render() {
        return(
          <div className="top-margin">
            <h5 className="header-left" id="designdev">design & development</h5>
            <center className="flexbox-container">
              <Reso />
              <Tend />
            </center>

            <br />

            <center><img src={vs} alt="UX vs UI diagram" className="image-large"/></center>
          </div>
        )
    }
}

export default DevDesign;