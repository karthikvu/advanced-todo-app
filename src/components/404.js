import React, { Component } from 'react';

class Component404 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message : "404 !!"
         }
    }
    render() { 
        const { message } = this.state;
        return (  
            <div>
                <h1>{message}</h1>
            </div>
         );
    }
}
 
module.exports =  Component404;