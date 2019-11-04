import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Admin from './components/admin/pages/dashboard'

const AdminApp = () => {
  return (
    <Switch>
      <Route exact path='/admin-dashboard' component={Admin} />
    </Switch>
  )
}

export default AdminApp
