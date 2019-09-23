import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import NotFoundPage from '../components/NotFoundPage'
import PublicRoute from './PublicRouter'
import { ConnectedRouter } from 'connected-react-router'

const AppRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>

      <Switch>

        <PublicRoute path="/" component={LandingPage} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>

    </div>
  </ConnectedRouter>
)

export default AppRouter
