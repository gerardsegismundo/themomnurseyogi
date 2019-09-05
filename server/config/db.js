const { connect } = require('mongoose')
const { mongoURI } = require('./keys')

const connectDB = () => {
  const dbConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

  connect(
    mongoURI,
    dbConfig
  )
}

module.exports = connectDB
