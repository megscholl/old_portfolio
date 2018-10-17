import React, { Component } from 'react';

import './Routes.css'

import Name from '../Name.js'

import {NavLink} from 'react-router-dom'
import Tawanna from './tawanna/tm.png'


class TawannaPage extends Component {
    render() {
        return(
            <div>
                <div className="App">
                    <NavLink to="/" exact className="home-link"><Name className="sub-name" name="meg scholl" /></NavLink>
                </div>

                <center className="tm-logo">
                  <img src={Tawanna} alt="Redhood Design's work with Tawanna Marcia's Art Gallery" title="Redhood Design's work with Tawanna Marcia's Art Gallery" width="100%"/>
                  
                </center>
                

            </div>
        )
    }
}

export default TawannaPage;