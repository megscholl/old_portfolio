import React, { Component } from 'react';
import './Hexagon.css';
// import Pinterest from 'url(http://www.pinterest.com/iifge/coding-design)';
// import { PinterestBoardWidget } from 'react-pinterest';

// const NavClick = "";

class Inspirations extends Component {

    NavClick = (e) => {
        let targetClass =  e.target.className;
        let link = targetClass.substring(12, targetClass.length);

        switch(link){
            case "pinterest":
                window.open("http://www.pinterest.com/iifge/coding-design", "_blank")
                break;

            case "pinspiry":
                window.open("http://www.pinspiry.com", "_blank")
                break;

                
            case "awwwards":
                window.open("http://www.awwwards.com", "_blank")
                break;

                
            case "dribbble":
                window.open("http://www.dribbble.com/", "_blank")
                break;

                
            case "medium":
                window.open("http://www.medium.com", "_blank")
                break;


            case "behance":
                window.open("http://www.behance.com", "_blank")
                break;

            default:
                break;
            
        }

        console.log("substring pinterest", link);
        //transform this - use a string method to take'hexagon'className out and grab only the hex-[brand] to target the singlular hexagon below

    }

    render() {
        return(
            <div>
                <h5 className="header-center-less" id="inspirations">inspirations</h5>
                <div className="inspirations-inline">

                    <div onClick={ this.NavClick } className="hexagon hex-pinterest" alt="pinterest" title="pinterest" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div onClick={ this.NavClick } className="hexagon hex-pinspiry" alt="pinspiry" title="pinspiry" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div onClick={ this.NavClick } className="hexagon hex-awwwards" alt="awwwards" title="awwwards" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div onClick={ this.NavClick } className="hexagon hex-dribbble" alt="dribbble" title="dribbble" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div onClick={ this.NavClick } className="hexagon hex-medium" alt="medium" title="medium" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div onClick={ this.NavClick } className="hexagon hex-behance" alt="behance" title="behance" >
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Inspirations;