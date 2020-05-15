import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store/store'

import 'antd/dist/antd.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter basename="/">
        <Route path="/" component={App} />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()
