import React, { Component } from 'react';
import Reso from './Reso';
import Tend from './Tend';
import JsPortfolio from './Portfolio';

class DevDesign extends Component {
    render() {
        return(
          <div id="designdev" className="top-margin">
            <h5 className="header-center" id="designdev">projects I've been working on...</h5>
            <center className="flexbox-container">
              <Reso />
              <Tend />
              <JsPortfolio />
            </center>

          </div>
        )
    }
}

export default DevDesign;