import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import DevTools from './devtools'
import App from './app'

const store = configureStore()

window.React = React; // enable debugger

const rootElement = document.getElementById('application-react')

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  rootElement
)
