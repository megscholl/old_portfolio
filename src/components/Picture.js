import React, { Component } from 'react';
import me from './images/mesnap.jpg';

class Picture extends Component {
    render() {
        return(
        <img src={me} className="image-medium" alt="Banner Pictures" />
        )
    }
}

export default Picture;