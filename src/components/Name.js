import React, { Component } from 'react';
import Title from './Title';



class Name extends Component {
    render() {
        return(
            <div className="App"> 
                <span className="name">{this.props.name}</span>

                <Title />
                <br />
            </div>
        )
    }
}

export default Name;