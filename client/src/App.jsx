import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import ClientApp from './ClientApp'
import AdminApp from './AdminApp'

const App = ({ setCurrentUser }) => {
  useEffect(() => setCurrentUser())

  return (
    <Router>
      {window.location.href.includes('admin') ? <AdminApp /> : <ClientApp />}
    </Router>
  )
}

export default connect(
  null,
  { setCurrentUser }
)(App)
