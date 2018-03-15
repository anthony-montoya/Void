import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile.jsx'
import {Authentication} from './components/Authentication'
import NotFound from './components/PageNotFound/PageNotFound'
import FindTeams from './components/FindTeams/FindTeams' 
import FindPlayers from './components/FindPlayers/FindPlayers' 

export default (
	<Switch>
		<Route component={Landing} path="/" exact />
		<Route component={Login} path="/login" />
		<Route component={Register} path="/register" />
		<Route component={Authentication(Profile)} path="/profile" />
		<Route component={Authentication(FindTeams)} path="/find-teams" />
		<Route component={Authentication(FindPlayers)} path="/find-players" />
		<Route component={NotFound} path="*" />
	</Switch>
)
