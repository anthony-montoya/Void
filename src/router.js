import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing/Landing.js'
import Login from './Login/Login.js'




export default (
    <Switch>
        <Route component={landing} exact path='/'/>
        <Route component={Login} path='/login' />

    </Switch>
)