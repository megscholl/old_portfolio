import React, { Component } from 'react'
import Name from './Name.js'
// import Navigation from './Nav'


class Home extends Component {
    render() {
        return(
            <div>
               {/* <Navigation /> */}
                <header className="App-header">
                    <Name name="meg scholl" />
                </header>
            </div>
        )
    }
}

export default Home;

