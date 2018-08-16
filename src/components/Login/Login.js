import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { login } from "../../actions/session";


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value,
        });
    };
    
    login = () => {
        console.log("login", this.state)
        this.props.login(this.state)
    }
    render() { 
        const {user, message} = this.props;
        if( user ) {
            return <Redirect to="/" />
        }
        return ( 
            <div className="container-fluid flex-center login">  
                <div className="box">
                    <Card style={{ padding: 10}}>
                        <CardContent>
                            <Typography variant="headline"  component="h1">
                                Login
                            </Typography>
                            <Typography component="div" className="text-center">
                            <TextField
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                                value={this.state.name}
                                onChange={this.handleChange}
                                margin="normal"
                                error={!!message}
                                />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth
                                type="password"

                                value={this.state.password}
                                onChange={this.handleChange}
                                margin="normal"
                                error={!!message}
                                />
                            </Typography>
                        </CardContent>
                        <CardActions className="text-center">
                            <Button  variant="contained" color="primary" onClick={this.login}>Login</Button>
                            <Button variant="outlined">
                                Forgot ?
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    user: state.session.user,
    message: state.session.message,
});
const mapDispatchToProps = dispatch => ({
    login: (userDetails) => {
      dispatch(login(userDetails));
    }
});

module.exports =  connect(mapStateToProps, mapDispatchToProps)(LoginComponent);