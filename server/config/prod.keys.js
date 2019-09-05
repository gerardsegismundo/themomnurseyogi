// Export production keys
module.exports = {
  mongoURI: process.env.MONGO_URI,
  google: {
    clientID: process.env.CLIENT_ID,
    clientSecrent: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    redirectURL: '/'
  },
  cookieKey: process.env.COOKIE_KEY
}
