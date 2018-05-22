import React, { Component } from 'react';
import './App.css';

class Inspiration extends Component {
    render() {
        return(
            <div>
                <h5 className="header-right" id="inspirations">my inspirations</h5>
                <center><a data-pin-do="embedBoard" data-pin-board-width="1200" data-pin-scale-height="550" data-pin-scale-width="200" href="https://www.pinterest.com/iifge/coding-design/"></a></center>
            </div>
        )
    }
}

export default Inspiration;