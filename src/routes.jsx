import React from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'
import NotFound from './pages/error/404/NotFound'

export const PublicRoutes = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Redirect to="/login" />
  </Switch>
)

export const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path='/' render={() => <HomePage />} />
    <Route component={NotFound} />
  </Switch>
)