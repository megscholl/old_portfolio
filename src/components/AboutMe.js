import React, { Component } from 'react';
// import Company from './Company';
import Resume from './Resume';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div id="about" className="wrap-text-center">
            <h5 className="header-center-less">about this little unicorn</h5>

               <p>Raised in the colorful fall's outside of Boston, MA, I vowed to bring beauty and simplicity to the world around me. I just so happen to live in the great era of technology.
               <br /><br />
                I love developing applications that are worth every day use, such as a budget tracker or a table reservation system.
                <br /><br />
                I believe that Design is not just “making it pretty”, and Developers don’t need to hear phrases like “it’s just a button”.
               </p>

               <Resume />
               
               {/*<Company />*/}
        </div>
            
        )
    }
}

export default AboutMe;