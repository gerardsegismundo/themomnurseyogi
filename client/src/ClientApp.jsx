import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'

import SignInModal from './components/layouts/SignInModal'
import DeleteModal from './components/layouts/DeleteModal'

import OtherPostsFooter from './components/layouts/OtherPostsFooter'
import SmallSearchbar from './components/layouts/SmallSearchbar'
import ScrollToTopController from './ScrollToTopController'

const ClientApp = () => {
  return (
    <>
      <ScrollToTopController />
      <SmallSearchbar />
      <DeleteModal />
      <SignInModal />
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />

        <Route
          exact
          render={props => <Post key={props.match.params.id} {...props} />}
          path='/post/:id'
        />
      </Switch>
      <OtherPostsFooter />
      <Footer />
    </>
  )
}

export default ClientApp
