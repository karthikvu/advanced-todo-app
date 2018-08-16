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
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/create'}>create</Link></li>
                  <li><Link to={'/edit'}>Edit</Link></li>
               </ul></div> 
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