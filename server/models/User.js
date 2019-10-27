const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
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

model('users', UserSchema)
