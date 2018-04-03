import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Login from './components/Login/Login.jsx'
import ContextRegister from './components/Register/Register'
import Profile from './components/Profile/Profile.jsx'
import { Authentication } from './components/Authentication'
import NotFound from './components/PageNotFound/PageNotFound'
import FindTeams from './components/FindTeams/FindTeams'
import FindPlayers from './components/FindPlayers/FindPlayers'
import Team from './components/Team/Team'
import ContextCompete from './components/Compete/Compete'
import Logout from './components/Logout/Logout'

export default (
  <Switch>
    <Route component={Landing} path="/" exact />
    <Route component={Login} path="/login" />
    <Route component={Logout} path="/logout" />
    <Route component={ContextRegister} path="/register" />
    <Route component={Authentication(FindPlayers)} path="/players" />
    <Route component={Team} path="/vb-teams" />
    <Route component={Team} path="/vb-teams/:team_id" />
    <Route
      component={Authentication(Profile)}
      path="/vb-profile/:vb_username"
    />
    <Route component={Authentication(FindTeams)} path="/find-teams" />
    <Route component={Authentication(ContextCompete)} path="/compete" />
    <Route component={NotFound} path="*" />
  </Switch>
)
