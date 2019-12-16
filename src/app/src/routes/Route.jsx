import React from 'react'
import {BrowserRouter ,Switch, Route} from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login' 
import Register from '../screens/Register'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}