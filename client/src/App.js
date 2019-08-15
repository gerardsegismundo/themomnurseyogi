import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import HeaderSocial from './components/layouts/HeaderSocial'
import Navbar from './components/layouts/Navbar'

const App = () => {
  return (
    <div className='container-fluid mt-3'>
      <HeaderSocial />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
