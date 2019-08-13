const path = require('path')

// Serve static asssets in production
module.exports = app => {
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('../client/build'))

    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
  } else {
    console.log('wuhahahahha')
  }
}
