import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Home, Login } from './routes'

function App() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
