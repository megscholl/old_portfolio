import React from 'react';
import './DevDesign.css';

class Company extends React.Component {
    render() {
        return(
            <div>
                <h6 className="header-center-less">what I'm looking for in a company</h6>
                    <div className="about-columns">
                    There's a lot I look for in a company where I plan to spend a majority of my time, and it's no news to me that you're looking to hire someone who's ambitious, willing to learn, and has a passion for design &&|| coding. There's a few things about a company that I'd like to be a part of: 
                    <ul>
                        <li>work-life balance is crucial for anyone's well-being; working for a company that recognizes this and practices a healthy work-life balance is a priority</li>
                        <li>conflict happens in the workplace, not often, but occasionally; how management resolves conflict is important and I'd like to be part of a team-oriented company or organization that works together for solutions to problems which benefits everyone</li>
                        <li>I love the tech community I'm in currently, but I'm willing to relocate for the right position. Cities that I'm interested in relocating to include, but are not limited to:<ul><li>Denver, CO</li><li>Salt Lake City, UT</li><li>Seattle, WA</li><li>Charlotte, NC</li><li>Boston, MA</li></ul></li>
                    </ul>
                    </div>
            </div>
        )
    }
}

export default Company;