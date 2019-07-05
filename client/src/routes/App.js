import React, { Component, Fragment } from 'react';
//Browser Router - Brain of React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Gives components ability to call action creators
import { connect } from 'react-redux';
//Pulls out all action creators
import * as actions from '../actions';

//Styles
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import '../assets/App.css';

//Pages
import NavBar from '../components/NavBar';
import Login from '../pages/Landing';
import Home from '../pages/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6fbf73",
      main: "#2e7d32",
      dark: "#357a38",
      contrastText: "#fff"
    },
    secondary: {
      light: "#6fbf73",
      main: "#f5f5f5",
      dark: "#ba000d",
      contrastText: "#000"
    },
    default: "#3b5998",
    
    typography: {
      useNextVariants: true
    }
  }
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <NavBar />
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/home' component={Home} />
            </Switch>
          </Router>
        </Fragment>
      </MuiThemeProvider>
    );
  } 
}

export default connect(null, actions)(App);
