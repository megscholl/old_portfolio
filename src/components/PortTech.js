import React, { Component } from 'react';
import './Hexagon.css';
import './Technologies.css';

// const TechClick = "";

class PortTech extends Component {

    render() {
        return(
            <div>
                <div className="tech-inline">

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

                    <div className="hexagon-y hex-react" alt="react" title="react" >
                        <div className="hexTop-y"></div>
                        <div className="hexBottom-y"></div>
                    </div>


                </div>
            </div>
        )
    }
}

export default PortTech;