import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />

          <Route
            exact
            render={props => <Post key={props.match.params.id} {...props} />}
            path='/post/:id'
          />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
