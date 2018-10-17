import React, { Component } from 'react';
import BearsLogo from './images/3bears/block_png.png';
// import TendTech from './TendTech';
import './DevDesign.css'
import Bears from './Bears'
import './bears.css'
// import { Accordion } from 'semantic-ui-react'
// import {Route} from 'react-router-dom'

class BearsImg extends Component {



    render() {
        return(
            <div className="bears-container">
                <div className="bears-project-width">
                    <img src={BearsLogo} alt="3bears logo - click to see 3bears webpage"  title="3bears logo - click to see 3bears webpage" className="bears-image zoom"/>
                </div>
               
                <p className="wrap-bears-text">The idea of 3Bears came from my own experience searching for a company I would once work for... As a millennial, I was not as interested in the money I would make, or the location of the offices; I viewed the companies values as a priority. A user of 3Bears would be like-minded, someone who strived to find a company whose culture fit with their own. Developed with ReactJS, Semantic-UI, and Firebase, this web application allows a user to view companies culture fit data and write reviews about their own companies. Keep in mind, this is Version 1, and there is much to come with Version 2.
            </p>

            <Bears />
            </div>

        )
    }
}

export default BearsImg;