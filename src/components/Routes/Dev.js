import React, { Component } from 'react';

import './Routes.css'
import Name from '../Name.js'
import {NavLink} from 'react-router-dom'
import TM from './tawanna/tm.png'


class Dev extends Component {
    render() {
        return( 
            <div>
                <div className="App">
                    <NavLink to="/" exact className="home-link"><Name name="meg scholl" /></NavLink>
                </div>

                <h1 className="about-me routes-h1">front-end development</h1>

                
                {/* HOVER IMAGES */}
                <center>
                    <div id="redhood">
                        
                        <div className="hover-item">
                        <a href="http://www.tawannamarcia.com" alt="tawanna marcia's website" title="tawanna marcia's website" target="_blank" rel="noopener noreferrer"> <img src={TM} alt="tawanna marcia gallery" width="60%" className="tm-logo"/></a>
                        </div>
                        <p>This website was developed by utilizing and manipulating a Squarespace&reg; template to design a comfortable website for maintenance in the future. Abstract artist Tawanna Marcia received a full design prototype with Adobe XD and a completed commerce website. You can find her website at &nbsp; <a href="http://www.tawannamarcia.com" alt="tawanna marcia's website" title="tawanna marcia's website" target="_blank" className="redhood-link" rel="noopener noreferrer" >tawannamarcia.com</a>.</p>
                        
                    </div>
                </center>  
                
                
                <div className="grey-content">
                    <center><h2>check back soon for more front-end content, such as...</h2>
                        <ul>
                            <li>Weed Wrangle&reg;</li>
                            <li>PixFunder, LLC</li>
                            <li>Tend</li>
                        </ul>
                    </center>

                </div>
            </div>
        )
    }
}

export default Dev;