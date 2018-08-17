import React, {Component} from 'react';
import { Link , withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Todo from "../ToDos/Todo";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateTask, addTask } from "../../actions/taskActions";

class AddEditTodo    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: "Add a title",
                description: "Add a description. It can be as long as you want.",
                status: 0
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

    handleSubmit = taskId => event => {
        let todo = this.state.todo;
        if(taskId == null) {
           this.props.addTask(todo);
        } else {
            this.props.updateTask(todo);
        }
        this.props.history.push("/");
    }

    render() {
        // console.log("add edit", this.props)
        const {todo} = this.state;
        const taskId = this.props.match.params.taskId;

        console.log(">>> ", this.props)
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
                        <Button onClick={this.handleSubmit(taskId)} variant="contained" color="primary" style={{marginRight: 10}}> { !!taskId ? "Update" : "Add"}</Button>
                        
                           <Link className="no-text-decoration" to="/"><Button variant="outlined"> Cancel</Button></Link>
                        
                        </div>
                    </div>

                </div>
                <div className="col-md-5 p-t-50">
                    <div className="m-bt-10"><b>Preview:</b>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Todo todo={todo} demo={true} deleteTodo ={() => {}} updateToDo={() => {}}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
  addTask: (task) => dispatch(addTask(task)),
  updateTask: (task) => dispatch(updateTask(task))
})
const mapStateToProps = state => ({
    todos: state.tasks.todos
})
module.exports =  withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEditTodo));