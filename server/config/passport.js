const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))

const GOOGLE_CLIENT_ID = ''
const GOOGLE_CLIENT_SECRET = ''
const CALLBACK_URL = '' // /auth/google/callback

const payload = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: CALLBACK_URL
}

passport.use(
  newGoogleStrategy(payload, (accessToken, refreshToken, profile, done) => {
    const userData = {
      email: profile.emails[0].value,
      name: profile.displayname,
      token: accessToken
    }
    done(null, userData)
  })
)
