import React, { Component } from 'react';

import './Routes.css'

import Name from '../Name.js'

import {NavLink} from 'react-router-dom'
import RHDLogo from './logo-png.png'


class Redhood extends Component {
    render() {
        return(
            <div>
                <div className="App">
                    <NavLink to="/" exact className="home-link"><Name className="sub-name" name="meg scholl" /></NavLink>
                </div>

                <center className="rhd-logo">
                  <img src={RHDLogo} alt="Redhood Designs Logo" width="48%"/>
                  
                </center>
                
            </div>
        )
    }
}

export default Redhood;