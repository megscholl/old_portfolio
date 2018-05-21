import React, { Component } from 'react';
import Reso from './images/image_of_reso.png';
import Tend from './images/tend_screen.png';
import vs from './images/ux_vs_ui.png';
import './DevDesign.css';

class DevDesign extends Component {
    render() {
        return(
          <div>
            <h5>hello world!!</h5>
            <img src={Reso} alt="screen shot of Reso by Meg Scholl" className="image-medium"/>
            <p>this is reso</p>
            <img src={Tend} alt="screen shot of Tend by Meg Scholl" className="image-medium"/>
            <p>this is tend</p>
            <img src={vs} alt="UX vs UI diagram" className="image-large"/>
          </div>
        )
    }
}

export default DevDesign;