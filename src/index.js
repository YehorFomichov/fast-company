import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './app/App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

ReactDom.render(
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
