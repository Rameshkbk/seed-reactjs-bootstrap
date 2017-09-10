import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, hashHistory } from 'react-router'
import store from "./store"

import App from "./App"

const root = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
     <Route path="/" component={App} />
    </Router>
  </Provider>
, root);
