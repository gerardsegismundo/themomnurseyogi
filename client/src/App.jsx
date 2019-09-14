import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'

import Admin from './components/admin/pages/dashboard'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import ModalSwitch from './components/common/ModalSwitch'

const App = () => {
  const AdminDashboard = (
    <Switch>
      <Route exact path='/admin-dashboard' component={Admin} />
    </Switch>
  )

  const ClientDashboard = (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />

        <Route
          exact
          render={props => <Post key={props.match.params.id} {...props} />}
          path='/post/:id'
        />
      </Switch>
      <Footer />
    </>
  )

  return (
    <>
      <ModalSwitch />
      <Router>
        {window.location.href.includes('admin')
          ? AdminDashboard
          : ClientDashboard}
      </Router>
    </>
  )
}

export default App
