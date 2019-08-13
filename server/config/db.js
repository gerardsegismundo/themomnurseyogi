const mongoose = require('mongoose')
const db = require('./keys').mongoURI

const connectDB = async () => {
  const dbConfig = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }

  try {
    await mongoose.connect(db, dbConfig)
    console.log('MongoDb connected..')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
