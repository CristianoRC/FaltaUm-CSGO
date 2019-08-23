import React from 'react'
import { Router, Switch, Route, } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Home } from './routes'
import './App.css'


//Componentes Template
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const history = createBrowserHistory()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Falta Um - CSGO
              </Typography>
              <Button onClick={() => { history.push('/login') }} color="inherit">Logar</Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div >
  )
}

export default App
