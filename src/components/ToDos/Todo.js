import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            dialogOpen: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(){
        this.setState({ anchorEl: null });
      };
    handleClick( event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true });
      };
    
    handleDialogClose = () => {
    this.setState({ dialogOpen: false });
    };

    openDialog = () => {
        this.setState({
            dialogOpen: true
        })
        this.handleClose();
    }
    render() { 
        const { todo, isManager, demo } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return ( 
               
               <Card style={{ padding: 10}}>
                    <CardHeader  title={todo.title} 
                     action={
                        (demo || isManager)  && <div><IconButton
                            aria-label="More"
                            aria-owns={open ? 'long-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={this.handleClose}
                            >
                                <Link  className="no-text-decoration" to={"/edit/" + todo.id}>
                           {todo.status == 0 && <MenuItem onClick={this.handleClose}>
                                    <ListItemIcon>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemText>Edit</ListItemText>
                            </MenuItem>}
                                </Link>
                            <MenuItem 
                                onClick={this.openDialog}
                                >
                                    <ListItemIcon>
                                        <DeleteIcon />
                                    </ListItemIcon>
                                    <ListItemText>Delete</ListItemText>
                            </MenuItem>
                            </Menu>
                        </div>
                      }/>
                        <CardContent style={{ height: 100}}>
                            <Typography component="p">
                                {todo.description}
                            </Typography>
                        </CardContent>
                        <CardActions className="text-center">
                            {(demo || !isManager ) && todo.status == 0 && <Button variant="outlined" onClick={(e) => this.props.updateToDo({...todo, status: 1})}>
                                Mark as Done
                            </Button>}
                            {todo.status == 1 && <Button disabled variant="contained" style={{ backgroundColor: "#009688", color: "white" }}>
                               <DoneIcon style={{ marginRight: 10, fontSize: 20}}/> Completed
                            </Button>}
                        </CardActions>
                        <Dialog
                            open={this.state.dialogOpen}
                            onClose={this.handleDialogClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                            <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Once you delete, there's no going back. Are you still sure you want to delete? 
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleDialogClose} color="primary"  autoFocus>
                                No, Dont
                                </Button>
                                <Button onClick={() => {this.props.deleteTodo(todo);this.handleDialogClose()}} color="secondary" variant="contained">
                                Yes, Delete
                                </Button>
                            </DialogActions>
                            </Dialog>
               </Card>
         );
    }
}
module.exports =  ToDo;