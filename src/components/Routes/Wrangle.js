import React, { Component } from 'react';

import './Routes.css'

import Name from '../Name.js'

import {NavLink} from 'react-router-dom'
import Wrangle from './wrangle/ww_logo.png'


class WranglePage extends Component {
    render() {
        return(
            <div>
                <div className="App">
                    <NavLink to="/" exact className="home-link"><Name className="sub-name" name="meg scholl" /></NavLink>
                </div>

                <div className="ww-contaier">
                    <img src={Wrangle} alt="weed wrangle&reg; logo" className="ww-logo"/>
                    <p></p>
                </div>
                

            </div>
        )
    }
}

export default WranglePage;