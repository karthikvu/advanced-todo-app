import React, {Component} from 'react';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Todo from "../ToDos/Todo";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddEditTodo    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: "Add a title",
                description: "Add a description. It can be as long as you want."
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            todo: {
                ...this.state.todo,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount(){
        const taskId = this.props.match.params.taskId;
        if(taskId != null) {
            const todos = this.props.todos;
            const todo = todos.filter(todo => todo.id == taskId)[0]

            if(todo){
                this.setState({
                    todo
                })
            } else {
                console.log("redirect !!!")
            }
        } 
    }
    render() {
        // console.log("add edit", this.props)
        const {todo} = this.state;
        const taskId = this.props.match.params.taskId;

        return (
            <div className="row">
                <div className="col-md-7  p-t-50">
                    <div className="row">
                        <div className="col-8">
                            <TextField
                                id="name"
                                name="title"
                                label="Title"
                                value={todo.title}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextField
                                id="name"
                                name="description"
                                label="Description"
                                value={todo.description}
                                onChange={this.handleChange}
                                margin="normal"
                                fullWidth
                                multiline/>
                        </div>
                    </div>
                    <div className="row m-bt-10">
                        <div className="col-12">
                        <Button  variant="contained" color="primary" style={{marginRight: 10}}> { !!taskId ? "Update" : "Add"}</Button>
                        <Button variant="outlined">
                           <Link to="/"> Cancel</Link>
                        </Button>
                        </div>
                    </div>

                </div>
                <div className="col-md-5 p-t-50">
                    <div className="m-bt-10"><b>Preview:</b>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Todo todo={todo} demo={true}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    todos: state.tasks.todos
})
module.exports =  connect(mapStateToProps)(AddEditTodo);