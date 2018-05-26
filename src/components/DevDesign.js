import React, { Component } from 'react';
import Reso from './Reso';
import Tend from './Tend';

class DevDesign extends Component {
    render() {
        return(
          <div className="top-margin">
            <h5 className="header-left" id="designdev">design & development</h5>
            <center className="flexbox-container">
              <Reso />
              <Tend />
            </center>

          </div>
        )
    }
}

export default DevDesign;