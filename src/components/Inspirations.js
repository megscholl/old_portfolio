import React, { Component } from 'react';
import './Hexagon.css';
// import { PinterestBoardWidget } from 'react-pinterest';

class Inspirations extends Component {
    render() {
        return(
            <div>
                <h5 className="header-center" id="inspirations">inspirations</h5>
                <div className="inspirations-inline">
                    <div className="hexagon hex-pinterest">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                    <div className="hexagon hex-pinsiry">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                    <div className="hexagon hex-awwwards">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                    <div className="hexagon hex-dribbble">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                    <div className="hexagon hex-medium">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                    <div className="hexagon hex-behance">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inspirations;