const passport = require('passport')
const { model } = require('mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { clientID, clientSecret, callbackURL } = require('../config/keys').google

const User = model('users')

passport.serializeUser((user, done) => done(null, /* user.id */ user))

passport.deserializeUser((user, done) => {
  // const user = await User.findById(id)
  done(null, user)
})

const googleConfig = {
  clientID,
  clientSecret,
  callbackURL
}

passport.use(
  new GoogleStrategy(
    googleConfig,
    async (accessToken, refreshToken, profile, done) => {
      // const existingUser = await User.findOne({ googleId: profile.id })
      // if (existingUser) return done(null, existingUser)

      // const newUser = new User({
      //   username: profile.displayName,
      //   googleId: profile.id,
      //   email: profile.emails[0].value,
      //   thumbnail: profile._json.picture
      // })

      // await newUser.save()
      // done(null, newUser)

      const userData = {
        username: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        thumbnail: profile._json.picture,
        token: accessToken
      }

      done(null, userData)
    }
  )
)
