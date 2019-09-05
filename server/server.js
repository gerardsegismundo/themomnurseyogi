const express = require('express')
const app = express()

require('./config/db')()
require('./config/routes')(app)
require('./config/productionAsset')(app)

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT)
