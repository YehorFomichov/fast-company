import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/navBar'
import NotFound from './components/page/notFound'
import Login from './layouts/login'
import Main from './layouts/main'
import Users from './layouts/users'
import UserEdit from './components/page/userEdit'

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route path='/fast-company' exact component={Main}></Route>
      <Route path='/fast-company/login:type?' component={Login}></Route>
      <Route
        path='/fast-company/useredit/:userId?'
        component={UserEdit}
      ></Route>
      <Route path='/fast-company/users/:userId?' component={Users}></Route>
      <Route path='/fast-company/404' component={NotFound}></Route>
      <Redirect to='/fast-company/404' />
    </Switch>
  </>
)

export default App
