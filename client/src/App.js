import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/layouts/Navbar'
import './sass/main.scss'

const App = () => {
  return (
    <div className='App'>
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
