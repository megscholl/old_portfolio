import React, { Component } from 'react';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div id="about" className="wrap-text-center">
             <h5 className="header-center">about this little unicorn</h5>
                <p className="about-columns">Meg earned her Bachelor of Science Degree from Westfield State University in Environmental Science, Regional Planning, and Geographic Information Systems (GIS). &nbsp;&nbsp;&nbsp; After graduating, she relocated to Nashville with her family, where she was presented with an abudance of opportunities including publishing, engineering, volunteer management and software development. She is currently enrolled in a full-time, advanced UX UI Design Front-End Web Development program at Nashville Software School.
                </p>
            </div>
        )
    }
}

export default AboutMe;