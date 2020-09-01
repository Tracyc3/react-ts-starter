import React, { FC } from 'react'

import { Route, Switch, useRouteMatch, Link, useParams } from 'react-router-dom'

const About: FC<unknown> = () => {
  return <div>This is about page</div>
}

const Topics: FC<unknown> = () => {
  const match = useRouteMatch()

  return (
    <>
      <div>This is topic page</div>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props.v.state</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic</h3>
        </Route>
      </Switch>
    </>
  )
}

const Topic: FC<unknown> = () => {
  const { topicId } = useParams()
  return <div>Request topicId is {topicId}</div>
}

const Home: FC<unknown> = () => {
  return <div>This is Home</div>
}

const Routes: FC<unknown> = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
