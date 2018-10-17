import React, { Component } from 'react';
import './DevDesign.css';
// import './resume.css';


class Resume extends Component {
    render() {
        return(
        <div className="section-resume">
            <h5 className="header-center-less">my experiences</h5>
            <p className="work-columns">
            <span className="resume-header">Nashville Software School /</span> <span className="job">Apprentice UI UX Designer & Front-end Developer / Jan 2018 - present</span><br /><br />
            <span className="resume-header"n>BrickTop's / </span><span className="job">Server & Hostess / Aug 2011 - present</span><br /><br />
            <span className="resume-header">Tennessee State Parks /</span> <span className="job">Friends & Volunteer Programs Assistant / 2016-2017</span><br /><br />
            <span className="resume-header">HandsOn Nashville /</span> <span className="job">Home Energy Savings AmeriCorps Member / 2015-2016</span><br /><br />
            </p>
        </div>
            
        )
    }
}

export default Resume;