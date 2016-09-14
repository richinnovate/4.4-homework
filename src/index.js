import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Router, Route, browserHistory } from 'react-router'
import { App, Gallery, Album, ImageView } from './components'

const router = <Router history={browserHistory}>
  <Route component={App}>
    <Route path='/' component={Album} />
    <Route path='/:albumName' component={Gallery} />
    <Route path='/:albumName/:image' component={ImageView} />
  </Route>
</Router>
ReactDOM.render(
  router,
  document.getElementById('root')
)
