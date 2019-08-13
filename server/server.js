const express = require('express')
const app = express()

require('./config/routes')(app)
require('./config/db')()
require('./config/productionAsset')(app)

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
