import React from 'react'
import {BrowserRouter ,Switch, Route} from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login' 

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}