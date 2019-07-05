import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    googleButton: {
        margin: theme.spacing(1),
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    facebookButton: {
        margin: theme.spacing(1),
        //boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
    },
    divider: {
        margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        marginTop: 30,
        maxWidth: 300,
    },
    facebook: "#3b5998"
}));

const Login = () => {
    const classes = useStyles();

    return (
        <div style={{ textAlign: 'center'}}>
            <Paper elevation={24} className={classes.paper}>
                <div className="LoginButtons">
                <Typography variant="body1" component="h2" color="primary">
                    Sign In With: 
                </Typography>
                <Divider className={classes.divider} />
                <Button
                    href="/auth/facebook"
                    variant="contained" 
                    id="facebook" 
                    className={classes.facebookButton}
                >
                    <i className="fab fa-facebook-square fa-2x" id="icons"></i>
                    Facebook
                </Button>
                <Button 
                    href="/auth/google"
                    variant="contained" 
                    id="google" 
                    className={classes.googleButton}
                >
                    <i className="fab fa-google fa-2x" id="icons"></i>
                    Google
                </Button>
                </div>
            </Paper>
        </div>
    );
};

//Destructered with ES15 syntax - hooking up state with our redux store
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, )(Login);