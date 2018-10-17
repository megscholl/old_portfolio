import React, { Component } from 'react';
import TendImg from './images/tend_screen.png';
import TendTech from './TendTech';
import './DevDesign.css';
import './Technologies.css';

class Tend extends Component {
    render() {
        return(
            <div className="project-width">
                <a href="https://github.com/megscholl/budget-tracker" alt="Tend Budget Tracker" title="Tend Budget Tracker" target="_blank" rel="noopener noreferrer"><img src={TendImg} alt="screen shot of Tend by Meg Scholl" className="image-examples zoom tend-image"/></a>
                <TendTech />
                <br />
                <br />
                <br />
                <p className="wrap-text"><span className="coming-soon">Coming soon.</span> Log your income by date and job, and watch a graph grow with <strong>Tend</strong>. Other features inclue a calendar and a to-do list.
                </p>
            </div>
        )
    }
}

export default Tend;