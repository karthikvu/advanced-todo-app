import React, { Component } from 'react';  
import { Switch, Route , Link} from 'react-router-dom'
import Login from "./Login/Login";
import ToDos from "./ToDos/ToDos";
import AddEditTodo from "./AddEditTodo/AddEditTodo";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
               <div className="header">
               </div> 
               <div className="container m-t-header">
               {/* <Switch>
                    <Route exact path='/' component={AddEditTodo}/>
                    <Route exact path='/create' component={AddEditTodo}/>
                    <Route exact path='/edit' component={AddEditTodo}/>
                </Switch> */}
                {this.props.children}
                </div>
            </div>
         );
    }
}
 
module.exports =  AppContainer;