import React, { Component } from 'react';

import './Routes.css'

import Name from '../Name.js'

import {NavLink} from 'react-router-dom'

// IMAGES //
// import TMHome from './tawanna/tm_home.png'
// import WWLocation from './wrangle/location-example.PNG'



class Design extends Component {
    render() {
        return(
            <div>
                <div className="App routed-name">
                    <NavLink to="/" exact className="home-link"><Name  className="sub-name" name="meg scholl" /></NavLink>
                </div>
                <h1 className="about-me routes-h1">user experience design</h1>
                
                <div className="grey-content">
                <center><h2>check back soon for ux content</h2></center>

                </div>
            </div>
        )
    }
}

export default Design;