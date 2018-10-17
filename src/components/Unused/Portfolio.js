import React, { Component } from 'react';
import RightArrow from './images/right-arrow.png';
import Vanilla from './Vanilla';
import ReactPic from './ReactPic';
import './DevDesign.css';
import './portfolio.css';
import './Technologies.css';

class JsPortfolio extends Component {
    render() {
        return(
            <div className="portfolio-width">
            
                <div className="portfolio-container"><Vanilla /><img src={RightArrow} title="right arrow" alt="right arrow" className="right-arrow"/><ReactPic /></div>

                <p className="wrap-text"><span className="drop-cap">C</span>oding can be a process, and sometimes after getting so far with a product or a design, you may find it's just not the right design or it doesn't quite fit your solution. Three months into NSS I realized I needed to completely revamp my portfolio site; I decided to use ReactJS, a component-based javascript framework I'd only been learning for about a month. I've developed a complete vanilla javascript website and revamped it into my first very-own react website.</p>

            </div>
        )
    }
}

export default JsPortfolio;