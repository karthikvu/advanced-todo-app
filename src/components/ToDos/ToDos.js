import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roles } from "../../data/users";

import Todo from "./Todo"
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos : [
                {
                    title: "Get Bread",
                    description : "Tomorrow's breakfast is decided as french toast. Hence need to get bread today",
                    status: 0
                }, {
                    title: "Finish Breadware Code",
                    description : "Complete the breadware Test. Dont forget to include redux into the code !",
                    status: 0
                }, {
                    title: "Visit Shivanasamudra",
                    description : "Shivanasamudra is beaming high with beauty this monsoons. Don't forget to visit this beauty.",
                    status: 0
                }, {
                    title: "Something else !",
                    description : "Something Else,Something Else Something Else Something Else Something Else Something Else",
                    status: 0
                }
            ]
         }
    }

    handleClose(){
        this.setState({
            showOptions : false
        })
    }
    render() { 
        const { todos, session } = this.props;
        console.log("<<>>", this.props)
        return ( 
            <div className="row">
               { todos.map( (todo, index) => 
                <div className="col-md-6 col-lg-4 m-bt-10"  key={index}>
                    <Todo todo={todo} isManager={session.user.role === roles.MANAGER}/>
                    </div>
                )}
            </div>
         );
    }
}

const mapStateToProps = state => ({
    todos: state.tasks.todos
})
module.exports =  connect(mapStateToProps)(ToDoList);