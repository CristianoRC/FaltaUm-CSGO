import React from 'react'
import { Router, Switch, Route, } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Home, Login } from './routes'
import './App.css'


//Componentes Template
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Falta Um - CSGO
          </Typography>
            <Button color="inherit">Logar</Button>
          </Toolbar>
        </AppBar>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div >
  )
}

export default App
