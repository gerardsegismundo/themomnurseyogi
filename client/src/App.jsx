import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post'

import Admin from './components/admin/pages/dashboard'

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import SignInModal from './components/layouts/SignInModal'
import DeleteModal from './components/layouts/DeleteModal'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import OtherPostsFooter from './components/layouts/OtherPostsFooter'

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    let unsubuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return () => unsubuscribeFromAuth()
    // eslint-disable-next-line
  }, [])

  const AdminDashboard = (
    <Switch>
      <Route exact path='/admin-dashboard' component={Admin} />
    </Switch>
  )

  const Client = (
    <>
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

  return (
    <>
      <DeleteModal />
      <SignInModal />
      <Router>
        {window.location.href.includes('admin') ? AdminDashboard : Client}
      </Router>
    </>
  )
}

export default connect(
  null,
  { setCurrentUser }
)(App)
