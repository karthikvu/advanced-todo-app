import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message : "App Loads Fine"
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
 
export default TestComponent;