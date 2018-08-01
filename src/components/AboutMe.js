import React, { Component } from 'react';
// import Company from './Company';
import Resume from './Resume';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div id="about" className="wrap-text-center">
            <h5 className="header-center-less">about me</h5>

               <p>Raised in the colorful seasons of Massachusetts, I vowed to bring beauty and simplicity to the world around me. 
               <br /><br />
                I'm interested in developing applications that are worth every day use, such as a budget tracker or a table reservation system.
                <br /><br />
                I believe that Design is not just “making it pretty”, and Developers don’t need to hear phrases like “it’s just a button”.
               </p>

               <div className="resume-section"><Resume /></div>
               
               {/*<Company />*/}
        </div>
            
        )
    }
}

export default AboutMe;