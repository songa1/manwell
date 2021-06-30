import React from 'react'
import passport from '../assets/passport.jpg'
import {useHistory} from "react-router-dom";
import {Typography, Avatar, MenuItem, Menu} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

function NavBar(){
    const classes = useStyles();
    let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('security')
        history.push(`/`)
    }
    return (
        <div>
            <div className='navbar'>
                <Typography className='brand' onClick={(e)=> history.push(`/`)}>ManWell</Typography>
                <ul>
                    <li onClick={(e) => history.push(`/stats`)}>Dashboard</li>
                    <li onClick={(e) => history.push(`/income`)}>Income</li>
                    <li onClick={(e) => history.push(`/expenses`)}>Expenses</li>
                    <li onClick={(e) => history.push(`/todo`)}>To-do</li>
                </ul>
                <div>
                    <Avatar alt="Profile" src={passport} onClick={handleClick}/>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={(e) => history.push(`/profile`)}>Profile</MenuItem>
                    <MenuItem onClick={(e) => history.push(`/settings`)}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default NavBar;