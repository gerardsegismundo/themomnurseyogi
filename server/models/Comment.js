const { model, Schema } = require('mongoose')

const CommentSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },

  photoURL: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

model('comment', CommentSchema)
