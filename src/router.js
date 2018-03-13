import React from 'react'
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
