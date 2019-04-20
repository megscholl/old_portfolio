import React, { Component } from 'react'
import Name from './Name.js'
import Picture from './Picture';
import Nav from './Nav'


class Home extends Component {
    render() {
        return(
            <div>
               <Nav />
                <header className="App-header">
                    <Name name="meg scholl" />
                    <Picture />
                </header>
            </div>
        )
    }
}

export default Home;

