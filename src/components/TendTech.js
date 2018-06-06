import React, { Component } from 'react';
import './Technologies.css';

// const TechClick = "";

class TendTech extends Component {

    render() {
        return(
            <div>
                {/*<h6 className="header-center-lesser" id="technologies">technologies practiced with Reso</h6>*/}
                <div className="tend-tech-inline">

                    <div className="hexagon-y hex-html" alt="html" title="html" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                    <div className="hexagon-y hex-css" alt="css" title="css" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                    <div className="hexagon-y hex-js" alt="js" title="js" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                    <div className="hexagon-y hex-sass" alt="sass" title="sass" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                    <div className="hexagon-y hex-grunt" alt="grunt" title="grunt" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                    <div className="hexagon-y hex-browserify" alt="browserify" title="browserify" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TendTech;