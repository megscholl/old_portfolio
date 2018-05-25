import React, { Component } from 'react';
import TendImg from './images/tend_screen.png';
import './Projects.css';

class Tend extends Component {
    render() {
        return(
            <div>
                <a href="https://github.com/megscholl/budget-tracker" alt="Tend Budget Tracker" title="Tend Budget Tracker" target="_blank" rel="noopener noreferrer"><img src={TendImg} alt="screen shot of Tend by Meg Scholl" className="image-examples"/></a>

                <p className="wrap-text"> THIS IS A PARAGRAPH HERE  THIS IS A PARAGRAPH HERE  THIS IS A PARAGRAPH HERE  THIS IS A PARAGRAPH HERE  THIS IS A PARAGRAPH HERE </p>
            </div>
        )
    }
}

export default Tend;