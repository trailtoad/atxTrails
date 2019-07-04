import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

export default App;
