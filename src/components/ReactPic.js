import React, { Component } from 'react';
import ReactPort from './images/react-port.PNG';
// import PortTech from './PortTech';
import './DevDesign.css';
import './Technologies.css';



class ReactPic extends Component {
    render() {
        return(
        <div>
           <img src={ReactPort} alt="screen shot of Meg Scholl's revamped portfolio site" className="portfolio-image2"/>
           {/*<PortTech />*/}
        </div>
        )
    }
}

export default ReactPic;

