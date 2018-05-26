import React, { Component } from 'react';
import ResoImg from './images/image_of_reso.png';
import './DevDesign.css';

class Reso extends Component {
    render() {
        return(
            <div>
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={ResoImg} alt="screen shot of Reso by Meg Scholl" className="image-examples zoom"/></a>

            </div>
        )
    }
}

export default Reso;