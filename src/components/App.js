import React, { Component } from 'react';
import Name from './Name';
// import Title from './Title';
// import Picture from './Picture';
import Arrow from './images/arrow_2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Name name="meg scholl"/>
        </div>
        <main>
          <img src={Arrow} alt="down arrow" className="arrow"/>
        </main>
      </div>
    );
  }
}

export default App;
