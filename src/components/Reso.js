import React, { Component } from 'react';
import ResoImg from './images/image_of_reso.png';
import './Projects.css';

class Reso extends Component {
    render() {
        return(
            <div>
                <a href="https://github.com/megscholl/capstone" alt="Reso, Meg Scholl NSS C24 Midway Capstone" title="Reso, Meg Scholl NSS C24 Midway Capstone" target="_blank" rel="noopener noreferrer"><img src={ResoImg} alt="screen shot of Reso by Meg Scholl" className="image-examples"/></a>

                <iframe title="Reso Slide Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vTuWjN4sky9Xgdl1esGTv25hqZiYW_ohVE9tM5KnYOC6uT746KrUzKmv0yCXOW9D_QmG6WFH7iqvoB-/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        )
    }
}

export default Reso;