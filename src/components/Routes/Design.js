import React, { Component } from 'react';
import './Routes.css'

// import Bears from './../images/3bears/prototype.PNG'
// import Persona from './../images/3bears/persona.PNG'
// import Challenge from './../images/3bears/ch_statement.PNG'

class Design extends Component {


    render() {
    

        return(
            <div>
                <h1 className="cursive-header">user experience design</h1>
                <h2>challenges</h2>
                    {/* <img src={Challenge} alt="" title="" width="45%"></img> */}
                <h2>personas</h2>
                    {/* <img src={Persona} alt="" title="" width="50%"></img> */}
                <h2>prototyping</h2>
                    {/* <img src={Bears} alt="3Bears prototype" title="3Bears Prototype" width="50%"></img> */}
                    
            </div>
        )
    }
}

export default Design;