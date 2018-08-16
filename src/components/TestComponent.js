import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
 
module.exports =  TestComponent;