import React, { Component } from 'react';
// import Company from './Company';
import Resume from './Resume';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div id="about" className="wrap-text-center">
            <h5 className="header-center-less">about me</h5>

               <p>With experience in everything between hospitality, to photography, to city planning, to volunteer management, I've developed a love for curiosity and exploring new trades. 
               <br /><br />
               User Experience Design is an incredible use of any developers time, as their audiences' interest is the main focus of design.
                <br /><br />
               Freelance and remote work are my current priorities as a Web Designer. 
               </p>

               <div className="resume-section"><Resume /></div>
               
               {/*<Company />*/}
        </div>
            
        )
    }
}

export default AboutMe;