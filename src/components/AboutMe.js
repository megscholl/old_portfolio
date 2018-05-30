import React, { Component } from 'react';
import './DevDesign.css';


class AboutMe extends Component {
    render() {
        return(
            <div className="wrap-text-center">
             <h5 className="header-center">About Me</h5>
             <div className=" readmore-box about-me-border">
                <p>Meg was born and raised in a small town outside of Boston, Massachusetts, where she learned about computers from her Grandfather at a fairly young age . He used programming languages for most of his career as an Actuary and was fond of teaching, which allowed Meg and her siblings to learn about the internet, and even how to take a computer apart and put it back together. Meg has always been intrigued by technology, but didn't start coding until she was about 14 years old. 
                </p>
                <p>At this age, Meg was comfortable with computers and internet was still relatively new, so she became very familiar with social media including LiveJournal and MySpace. Aesthetics and design have always been important to her, as is learning what makes her sites tick. Every day her site would look different because she enjoyed coding and making her site look a certain way that reflected her personality at that given time. 
                </p>
                <p>Since then, Meg earned her Bachelor of Science Degree from Westfield State University in Environmental Science, Regional Planning, and Geographic Information Systems (GIS). After graduating, she relocated to Nashville with her family, where she was presented with an abudance of opportunities including publishing, engineering, volunteer management and software development. She is currently enrolled in a full-time advanced UX UI Design Front-End Development program at Nashville Software School.
                </p>
            </div>
            <p className="read-more center"><a href="" className="button project-links">Read More</a></p>
            </div>
        )
    }
}

export default AboutMe;