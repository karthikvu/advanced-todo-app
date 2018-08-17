import React, {Component} from 'react';
import {connect} from 'react-redux';
import {roles} from "../../data/users";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from "./Todo"
import FilterListIcon from '@material-ui/icons/FilterList';
import { Link , withRouter } from "react-router-dom";




import { updateTask, deleteTask } from "../../actions/taskActions";
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            filter: "0,1"
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
        // this.setState({
        //     dialogOpen: true
        // })
       this.props.deleteTask(todo);
    }
    setFilter = filter => event => {
        this.setState({
            filter
        })
        this.handleClose();
    } 

    


    render() {
        const {todos, session} = this.props;
        const {anchorEl, filter} = this.state;
        const isManager = session.user.role === roles.MANAGER;
        const filterVal = filter.split(",").map(Number);
        let filtered = todos.filter(todo => filterVal.indexOf(todo.status) > -1 );
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
                            variant={filter == "0,1" ? "outlined" : "contained"}
                            //the material components are not aligned
                            color={filter == "0,1" ? "primary" : "secondary"}
                            style={{marginTop: 4}}
                            onClick={this.handleClick}>
                            <FilterListIcon style={{ marginRight: 10, fontSize: 20}} />
                            Filter
                        </Button>
                        
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}>
                            <MenuItem selected={filter == "0,1"} onClick={this.setFilter("0,1")}>All</MenuItem>
                            <MenuItem selected={filter == "0"} onClick={this.setFilter("0")}>Incomplete</MenuItem>
                            <MenuItem selected={filter == "1"} onClick={this.setFilter("1")}>Complete</MenuItem>
                        </Menu>
                        {isManager && <Link className="no-text-decoration" to="/create" style={{marginLeft: 10 }}><Button variant="contained" color="primary"> Add New</Button></Link>}
                    </div>
                </div>
                <div className="row">
                    {filtered.map((todo, index) => <div className="col-md-6 col-lg-4 m-bt-10" key={index}>
                        <Todo todo={todo} 
                            isManager={isManager} 
                            updateToDo={this.updateToDo}
                            deleteTodo={this.deleteTodo}/>
                    </div>)}
                    {filtered.length == 0 && <div className="col-12 no-data text-center">No Todos. {filter != "0,1" && <div>Try changing filter selection</div>} </div>}
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