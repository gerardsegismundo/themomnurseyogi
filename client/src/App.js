import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import { connect } from 'react-redux'
import { getPosts } from './_actions/postActions'
import { closeSearch } from './_actions/uiActions'

const App = ({ getPosts, closeSearch }) => {
  // Closes searchBar and hanburger nav when click outside
  const handleClick = e => {
    const includesClass = className =>
      e.target.className.includes(className) ? true : false

    includesClass('trigger-search') && closeSearch()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    getPosts()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />

          <Route
            exact
            render={props => (
              <Post key={props.match.params.pageid} {...props} />
            )}
            path='/post/:id'
          />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default connect(
  null,
  { getPosts, closeSearch }
)(App)
