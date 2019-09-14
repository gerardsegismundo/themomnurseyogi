const { connect } = require('mongoose')
const { mongoURI } = require('./keys')

const connectDB = async () => {
  const dbConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }

  try {
    await connect(
      mongoURI,
      dbConfig
    )
    console.log('MongoDb connected..')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
