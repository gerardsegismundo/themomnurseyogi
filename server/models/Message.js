const { model, Schema } = require('mongoose')

const MessageSchema = new Schema({
  displayName: {
    type: String
  },
  email: {
    type: String
  },
  body: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

model('message', MessageSchema)
