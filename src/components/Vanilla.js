import React, { Component } from 'react';
import basic from './images/vanilla.PNG';
import './Technologies.css';
// import TendTech from './TendTech';


class Vanilla extends Component {
    render() {
        return(
        <div>
            <img src={basic} alt="screen shot of Meg Scholl's first portfolio site" className="portfolio-image1"/>
            {/*<TendTech />*/}
        </div>
        )
    }
}

export default Vanilla;