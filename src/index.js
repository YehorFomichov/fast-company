import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { createStore } from './app/store/createStore'
import { Provider } from 'react-redux'

const store = createStore()

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
