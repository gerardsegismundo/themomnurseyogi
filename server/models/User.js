const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    requried: true
  },
  googleId: {
    type: String,
    required: true
  },
  thumbnail: String
})

model('users', userSchema)
