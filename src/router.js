import React from 'react'
<<<<<<< HEAD
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing.js'
import Login from './components/Login/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import {Authentication} from './components/Authentication'




export default (
    <Switch>
        <Route component={Landing} path='/' exact/>
        <Route component={Login} path='/login' />
        <Route component={Authentication(Profile)} path='/profile' />
    </Switch>
)
=======
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import NotFound from './components/PageNotFound/PageNotFound'

export default (
	<Switch>
		<Route component={Landing} path="/" exact />
		<Route component={Login} path="/login" />
		<Route component={Profile} path="/profile" />
		<Route component={NotFound} path="*" />
	</Switch>
)
>>>>>>> Feature/Landing
