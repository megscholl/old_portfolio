import React, { Component } from 'react';
import Title from './Title';
import Picture from './Picture';
import Nav from './Nav';
import './Name.css';


class Name extends Component {
    render() {
        return(
            <div>
                <div>
                    <Nav />
                </div>
                <div className="App">
                    <header className="App-header"><span className="name">{this.props.name}</span>

                    <Title />
                    <br />
                    <Picture />
                    </header>
                </div>
          </div>
        )
    }
}

export default Name;