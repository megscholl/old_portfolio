import React, { Component } from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch
 } from "react-router-dom"


// import Nav from './Nav';
import './App.css';
import Home from './Home.js'
import About from './Routes/About.js'
import Redhood from './Routes/Redhood.js'
import Wrangle from './Routes/Wrangle.js'
import Tawanna from './Routes/Tawanna.js'
          

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Switch>
              <Route path="/" component={Home} exact />
              {/*<Route path="/dev" component={Dev} exact />
              <Route path="/design" component={Design} exact />*/}
              <Route path="/about" component={About} exact />
              <Route path="/design" component={Redhood} exact />
              <Route path="/design/wrangle" component={Wrangle} exact />
              <Route path ="/design/tawanna" component={Tawanna} exact />
          </Switch>
          
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
