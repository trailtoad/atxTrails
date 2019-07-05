import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

//Side Drawer
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsBike from '@material-ui/icons/DirectionsBike'

//App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    section: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    list: {
        width: 250,
    },
    picture: {
        marginTop: 4,
        
    },
    icon: {
        marginRight: 10
    }
}));

const NavBar = user => {

    console.log(user)

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const isMenuOpen = Boolean(anchorEl);
    
    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Button href='/api/logout'><AccountCircle className={classes.icon} /> Logout</Button>
            </MenuItem>
        </Menu>
    );
    
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Trails'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <DirectionsBike /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
            </List>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" elevation={24}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        disableBackdropTransition={!iOS} 
                        disableDiscovery={iOS}
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {sideList('left')}
                    </SwipeableDrawer>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TrailToad
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.section}>
                        <Avatar alt="User Image" src="" className={classes.picture} />
                        <IconButton
                            edge="end"
                            aria-label="Account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div> 
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>      
    );
}

NavBar.prototypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.auth,
    };
};

export default connect(mapStateToProps)(NavBar);