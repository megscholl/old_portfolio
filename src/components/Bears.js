
import React, { Component } from 'react';
import './bears.css';
import Quote from './images/3bears/quote.PNG'
import Challenge from './images/3bears/ch_statement.PNG'
import Persona from './images/3bears/persona.PNG'
import Research from './images/3bears/research.PNG'
import Mvp from './images/3bears/mvp_stretch_v2.PNG'
import Prototype from './images/3bears/prototype.PNG'


class Bears extends Component {
    render() {
        return(
            <div>
                <h1 className="bears-h1">3Bears - final nss capstone project & ux design process </h1>
                <div className="bears-layout">
                <div className="container">
                    <img src={Quote} alt="quote" className="process-img left-content"/>
                    
                    <img src={Challenge} alt="challenge statement" className="process-img right-content"/>
                
                    <img src={Persona} alt="Persona" className="process-img left-content"/>
                    
                    <img src={Research} alt="research" className="process-img right-content"/>
                    
                    <img src={Mvp} alt="MVP stretch V2" className="process-img left-content"/>
                    
                    <img src={Prototype} alt="Prototype" className="process-img right-content"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Bears;
