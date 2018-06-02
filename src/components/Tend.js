import React, { Component } from 'react';
import TendImg from './images/tend_screen.png';
import './DevDesign.css';

class Tend extends Component {
    render() {
        return(
            <div className="project-width">
                <a href="https://github.com/megscholl/budget-tracker" alt="Tend Budget Tracker" title="Tend Budget Tracker" target="_blank" rel="noopener noreferrer"><img src={TendImg} alt="screen shot of Tend by Meg Scholl" className="image-examples zoom tend-image"/></a>

                
                <h5 className="coming-soon">coming soon</h5><p className="wrap-text"><span className="drop-cap">T</span>end is a personal project which will soon incorporate React. Working as a Server brings the risk of getting auditted. It's important to be able to track, or tend to, your incoming finances. <strong>Tend</strong> will allow a user to log their income by date and by job, as well as see a growing graph based on their income. Other features inclue a calendar and a to-do list. See the GitHub Repo for Tend by clicking the image above. </p>
            </div>
        )
    }
}

export default Tend;