import React from 'react'

// react-router-dom
import { Switch, Route } from 'react-router-dom'

// components
import Main from '../Main'
import Hero from '../Hero'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/Hero/:heroId' component={Hero} />
    <Route exact path='*' component={Main} />
  </Switch>
)

export default Routes
