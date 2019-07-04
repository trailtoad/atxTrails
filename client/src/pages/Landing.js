import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
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
                <Typography variant="body2" component="h3" color="primary">
                    Sign In With: 
                </Typography>
                <Button variant="contained" id="facebook" className={classes.button}>
                    <i className="fab fa-facebook-square fa-2x" id="icons"></i>
                    Facebook
                </Button>
                <Button variant="contained" id="google" className={classes.button}>
                    <i className="fab fa-google fa-2x" id="icons"></i>
                    Google
                </Button>
                </div>
            </Paper>
        </div>
    );
};

export default Login;