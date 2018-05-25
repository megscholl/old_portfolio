import React, { Component } from 'react';
import vs from './images/ux_vs_ui.png';

class Recd extends Component {
    render() {
        return(
            <div>
                <center><iframe title="Rec'd UX Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQM1igenUSYlIbhDFOHqs4Eqqj4A8ouM_B8OZ-KXdIs2mjaMQPVecOX6Uuc8yLF0HvYvX2ssyZp2MDW/embed?start=false&loop=true&delayms=5000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></center>

                
            <br />

            <center><img src={vs} alt="UX vs UI diagram" className="image-large"/></center>
            </div>
        )
    }
}

export default Recd;