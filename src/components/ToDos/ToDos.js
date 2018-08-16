import React, {Component} from 'react';
import {connect} from 'react-redux';
import {roles} from "../../data/users";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from "./Todo"
import FilterListIcon from '@material-ui/icons/FilterList';

import { updateTask, deleteTask } from "../../actions/taskActions";
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        };
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };
    updateToDo = (todo) => {
        this.props.updateTask(todo);
    }
    deleteTodo = (todo) => {
        this.props.deleteTask(todo);
    }
    render() {
        const {todos, session} = this.props;
        const {anchorEl} = this.state;
        return (
            <div>
                <div className="row m-bt-10">
                    <div className="col-6">
                        <h4>Your TODO List</h4>
                    </div>
                    <div className="col-6 text-right">
                        <Button
                            aria-owns={anchorEl
                            ? 'simple-menu'
                            : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                            <FilterListIcon style={{ marginRight: 10, fontSize: 20}} />
                            Filter
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.handleClose}>All</MenuItem>
                            <MenuItem onClick={this.handleClose}>Incomplete</MenuItem>
                            <MenuItem onClick={this.handleClose}>Complete</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="row">
                    {todos.map((todo, index) => <div className="col-md-6 col-lg-4 m-bt-10" key={index}>
                        <Todo todo={todo} 
                            isManager={session.user.role === roles.MANAGER} 
                            updateToDo={this.updateToDo}
                            deleteTodo={this.deleteTodo}/>
                    </div>)}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
})
const mapStateToProps = state => ({todos: state.tasks.todos})
module.exports = connect(mapStateToProps,mapDispatchToProps)(ToDoList); 