import React, { Component } from 'react';
import './Footer.css';
import LinkedIn from './images/linkedin.png';
import Github from './images/github.png';
import Email from './images/email.png';

class Footer extends Component {
    render() {
        return(
            <div>
                <footer className="footer">
                <center><span>find me on linked in and github</span></center>
                <br />
                    <center className="footer-text footer-flex-container">
                        <a href="https://www.linkedin.com/in/megscholl" target="_blank" rel="noopener noreferrer" alt="meg scholl's linked in profile" title="meg scholl's linked in profile"><img src={LinkedIn} alt="linked in icon" className="footer-icons"/></a>
                        <a href="https://www.linkedin.com/in/meg-scholl" target="_blank" rel="noopener noreferrer" alt="meg scholl's linked in profile" title="meg scholl's linked in profile"><img src={Github} alt="github icon" className="footer-icons"/></a>
                        <a href="mailto:meghan.e.scholl@gmail.com" target="_blank" rel="noopener noreferrer" alt="send meg scholl an email" title="send meg scholl an email"><img src={Email} alt="email icon" className="footer-icons"/></a>
                    </center>
                </footer>
            </div>
        )
    }
}

export default Footer;