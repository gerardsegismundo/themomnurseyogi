const { model, Schema } = require('mongoose')

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  hashtags: Array,

  likes: [
    {
      user: {}
    }
  ],
  comments: [
    {
      user: { type: String, required: true },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
})

model('post', PostSchema)
