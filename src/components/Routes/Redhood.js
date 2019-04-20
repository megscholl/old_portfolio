import React, { Component } from 'react';
import './Routes.css'
import Nav from './../Nav'
import Design from './Design'
import Dev from './Dev'
import Name from '../Name.js'
import {NavLink} from 'react-router-dom'


class Redhood extends Component {
    render() {
        return(
            <div>
            <Nav />
                
            <div className="App App-header2">
                <NavLink to="/" exact className="home-link"><Name  className="sub-name" name="meg scholl" /></NavLink>
            </div>

                <center className="rhd-logo">
                {/* <img src={RHDLogo} alt="Redhood Designs Logo" width="48%"/>*/}
                  
                 <Design />
                 <Dev />
                
                </center>

                <div>
                </div>
            </div>    
        )
    }
}

export default Redhood;