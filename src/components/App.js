import React, { Component } from 'react';
import Name from './Name';
import DevDesign from './DevDesign';
import Inspirations from './Inspirations';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import Arrow from './images/down_arrow.png';
import './MediaQueries.css';
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
          <br />
          <DevDesign />
          <Technologies />
          <AboutMe />
          <Inspirations />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
