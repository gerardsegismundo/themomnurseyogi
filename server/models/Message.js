const { model, Schema } = require('mongoose')

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  unread: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

model('message', MessageSchema)
