import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import BottomPosts from './components/layouts/BottomPosts'
import BottomImages from './components/layouts/BottomImages'

const App = () => {
  return (
    <div className='container-fluid mt-3'>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <BottomPosts />
        <BottomImages />
      </Router>
    </div>
  )
}

export default App
