import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
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
    render() { 
        const { todo, isManager, demo } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return ( 
               
               <Card style={{ padding: 10}}>
                    <CardHeader  title={todo.title} 
                     action={
                        (demo || isManager) &&  <div><IconButton
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
                                <Link to={"/edit/" + todo.id}>
                            <MenuItem onClick={this.handleClose}>
                                    <ListItemIcon>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemText>Edit</ListItemText>
                            </MenuItem>
                                </Link>
                            <MenuItem onClick={this.handleClose}>
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
                            {(demo || !isManager ) && <Button variant="outlined">
                                Mark as Done
                            </Button>}
                        </CardActions>
               </Card>
         );
    }
}
module.exports =  ToDo;