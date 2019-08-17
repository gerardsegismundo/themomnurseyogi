import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

import { connect } from 'react-redux'
import { getPosts } from './_actions/postActions'

const App = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts()

    // eslint-disable-next-line
  }, [])

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
        <Footer />
      </Router>
    </div>
  )
}
const mapStateToProps = props => ({
  posts: props.posts
})

export default connect(
  mapStateToProps,
  { getPosts }
)(App)
