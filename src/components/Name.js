import React, { Component } from 'react';
import './Name.css'
import Picture from './Picture';


class Name extends Component {
    render() {
        return(
            <div className="App"> 
                <h1 className="name">{this.props.name}</h1>
                <h2 className="title">front-end developer & ux web designer</h2>
                <Picture />
                <h3 className="construction">this website is under construction</h3>
                <h6><strong>to contact or learn more about meg, visit <a href="https://www.linkedin.com/in/meg-scholl" title="meg scholl linked in" alt="meg scholl linked in" className="links" >her LinkedIn page</a></strong></h6>
                
            </div>
        )
    }
}

export default Name;