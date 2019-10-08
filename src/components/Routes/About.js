import React, { Component } from 'react';

import './Routes.css'
import Name from '../Name.js'
import {NavLink} from 'react-router-dom'
import Meg from './meg.jpg.png'
import Nav from './../Nav'



class About extends Component {
    render() {
        return(
            <div>
            <Nav />
                <div className="App App-header2">
                    <NavLink to="/" exact className="home-link"><Name name="meg scholl" /></NavLink>
                </div>
                <h1 className="cursive-header" center>about me</h1>
                <div className="grey-content">

                    <img src={Meg} alt="meg scholl" className="selfie d-block d-md-none"/>
                    <p><strong> title: </strong> marketing web developer<br />
                    <strong>education: </strong>nashville software school, westfield state university<br /> <strong>current city:</strong> Nashville. TN, *willing to relocate</p>
                    <p><strong>favorite quote: </strong> "I love all the places I ain't ever been to" - the head and the heart <br />
                    <strong>favorite places to visit: </strong> denver, boston, seattle<br /><strong>hobbies &amp; interests: </strong> hiking, podcasts, severe weather, true crime<br /> <strong>top emojis:</strong> 🤗🤷😂 <br /></p>

                </div>

                <h1 className="cursive-header">connect with me</h1>
                <div className="grey-content">
                
                    <ul>
                        <li><a rel="noopener noreferrer" href="http://www.github.com/megscholl" alt="meg scholl github" title="meg scholl github" className="links" target="_blank">GitHub</a> </li>
                        <li><a rel="noopener noreferrer" href="http://www.linkedin.com/in/meg-scholl" alt="meg scholl linkedin" title="meg scholl linkedin" className="links" target="_blank">LinkedIn</a> </li>
                        <li><a rel="noopener noreferrer" href="mailto:meghan.e.scholl@gmail.com" alt="email meg scholl" title="email meg scholl" className="links" target="_blank">Email</a> </li>
                        <li><a rel="noopener noreferrer" href="https://www.pinterest.com/iifge/coding-design/" alt="meg scholl code & design pinterest board" title="meg scholl code & design pinterest board" className="links" target="_blank">Pinterest</a> </li>
                    </ul>
                
                </div>

            </div>
        )
    }
}

export default About;